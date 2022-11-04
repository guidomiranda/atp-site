import axios from '../config/axios';

export const getVouchers = async () => {
	const data = await axios({
		method: 'GET',
		url: '/promociones',
	});

	return data.data;
};

export const getVoucher = async (id: string) => {
	const data = await axios({
		method: 'GET',
		url: `/promociones/${id}`,
	});

	return data.data;
};

export const updateVoucher = async (id: string, clientInfo: any) => {
	console.log('clientInfo: ', clientInfo);
	const data = await axios({
		method: 'PATCH',
		url: `/promociones/${id}`,
		data: JSON.stringify(clientInfo),
	});

	return data.data;
};

export const createVoucher = async (clientInfo: any) => {
	const data = await axios({
		method: 'POST',
		url: `/promociones/create`,
		data: JSON.stringify(clientInfo),
	});

	return data.data;
};

export const deleteVoucher = async (id: string) => {
	const data = await axios({
		method: 'DELETE',
		url: `/promociones/${id}`,
	});

	return data.data;
};
