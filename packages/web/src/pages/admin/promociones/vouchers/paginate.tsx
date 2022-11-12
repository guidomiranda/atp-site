import axios from '../../../../config/axios';
import { useState, useEffect } from "react";
import Pagination from "../../../../components/Pagination";
import { paginate } from '../../../../utils/paginate';
import { useQuery } from '@tanstack/react-query';
import { log } from 'console';


const Paginate: React.FC = () => {
const [posts, setPosts] = useState([]);
  const pageSize = 3;
  const [currentPage, setCurrentPage] = useState(1);

  const getPosts = async () => {
    const resp = await axios({
      method: 'GET',
      url: '/vouchers',
    });
    setPosts(resp.data.data);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  
  const handleDelete = (post) =>{
	setPosts(posts.filter(p => p.id !== post.id ))
  }

  const paginatePosts = paginate(posts, currentPage, pageSize);

  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {paginatePosts.map((post) => (
            <tr key={post.id}>
              <td> {post.id} </td>
              <td> {post.title} </td>
              <td>
                <button onClick = {()=> handleDelete(post)} className="btn btn-danger btn-sm"> Delete </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Pagination
        items={posts.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  )
}

export default Paginate;