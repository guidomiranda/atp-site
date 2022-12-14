import axios from '../config/axios';

export const getSuccesses = async () => {
	const data = await axios({
		method: 'GET',
		url: '/success',
	});

	return data.data;
};

export const getSuccess = async (id: string) => {
	const data = await axios({
		method: 'GET',
		url: `/success/${id}`,
	});

	return data.data;
};

export const updateSuccess = async (id: string, successInfo: any) => {
	const data = await axios({
		method: 'PATCH',
		url: `/success/${id}`,
		data: JSON.stringify(successInfo),
	});

	return data.data;
};

export const deleteSuccess = async (id: string) => {
	const data = await axios({
		method: 'DELETE',
		url: `/success/${id}`,
	});

	return data.data;
};

export const createSuccess = async (successInfo: any) => {
	const data = await axios({
		method: 'POST',
		url: `/success/create`,
		data: JSON.stringify(successInfo),
	});

	return data.data;
};
