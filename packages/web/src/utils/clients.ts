import axios from '../config/axios';

export const getClients = async () => {
	const data = await axios({
		method: 'GET',
		url: '/client',
	});

	return data.data;
};
