import axios from '../config/axios';

export const getBanners = async () => {
	const data = await axios({
		method: 'GET',
		url: `/banner`,
	});

	return data.data;
};

export const getBanner = async (id: string) => {
	const data = await axios({
		method: 'GET',
		url: `/banner/${id}`,
	});

	return data.data;
};
