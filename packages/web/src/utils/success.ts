import axios from '../config/axios';

export const getSuccesses = async () => {
	const data = await axios({
		method: 'GET',
		url: '/success',
	});

	return data.data;
};
