import axios from '../config/axios';

export const getBanners = async () => {
	const data = await axios({
		method: 'GET',
		url: `/banner`,
	});

	return data.data;
};
