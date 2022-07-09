import axios from '../config/axios';

export const getBatteries = async () => {
	const data = await axios({
		method: 'GET',
		url: `/product`,
	});

	return data.data;
};
