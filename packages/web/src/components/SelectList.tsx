import  Message from './Message';
import Loader from './Loader';
import Select from './Select';
import { useFetch } from '../hooks/useFetch';

export const SelectList = ({title,url,handleChange}) => {

    const {data,error,isLoading} = useFetch(url);
	
    if(!data) return null;
    console.log('data: ',data,' error: ', error,' isLoading: ', isLoading);

    if (error) {
        return (
          <Message
            msg={`Error ${error.status}: ${error.statusText}`}
            bgColor="#dc3545"
          />
        );
      }
      let id = `select-${title}`;
      let label = title.charAt(0).toUpperCase() + title.slice(1);
      let options = data.data;
      //console.log('options: ',options);
    
      return (
        <>
          {isLoading && <Loader />}
          <Select 
            w='full' 
            name={id}
            id={id} 
            onChange={handleChange}
            isRequired
          >
            <option value={""}>
              --Selecciona {label} -- *
            </option>            
            {data &&
              options.map((el) => (
                <option key={el.id} value={el.id}>
                  {''}
                  {el.nombre}
                </option>
              ))}
          </Select>
        </>
      );
    };
    
    export default SelectList;