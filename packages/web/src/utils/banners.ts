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

export const updateBanner = async (id: string, bannerInfo: any) => {
	const data = await axios({
		method: 'PATCH',
		url: `/banner/${id}`,
		data: JSON.stringify(bannerInfo),
	});

	return data.data;
};

export const createBanner = async (bannerInfo: any) => {
	const data = await axios({
		method: 'POST',
		url: `/banner/create`,
		data: JSON.stringify(bannerInfo),
	});

	return data.data;
};

export const deleteBanner = async (id: string) => {
	const data = await axios({
		method: 'DELETE',
		url: `/banner/${id}`,
	});

	return data.data;
};
