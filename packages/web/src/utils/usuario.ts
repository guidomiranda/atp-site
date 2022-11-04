import axios from '../config/axios';

export const getVouchers = async () => {
	const data = await axios({
		method: 'GET',
		url: '/vouchers',
	});

	return data.data;
};

export const getVoucher = async (id: string) => {
	const data = await axios({
		method: 'GET',
		url: `/vouchers/${id}`,
	});

	return data.data;
};

export const updateVoucher = async (id: string, clientInfo: any) => {
	console.log('clientInfo: ', clientInfo);
	const data = await axios({
		method: 'PATCH',
		url: `/vouchers/${id}`,
		data: JSON.stringify(clientInfo),
	});

	return data.data;
};

export const createVoucher = async (clientInfo: any) => {
	const data = await axios({
		method: 'POST',
		url: `/vouchers/create`,
		data: JSON.stringify(clientInfo),
	});

	return data.data;
};

export const deleteVoucher = async (id: string) => {
	const data = await axios({
		method: 'DELETE',
		url: `/vouchers/${id}`,
	});

	return data.data;
};
