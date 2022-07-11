import axios from '../config/axios';

export const getReviews = async () => {
	const data = await axios({
		method: 'GET',
		url: '/review',
	});

	return data.data;
};
