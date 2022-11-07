import axios from '../config/axios';

export const getProductos = async () => {
	const data = await axios({
		method: 'GET',
		url: '/productos',
	});

	return data.data;
};

export const getProducto = async (id: string) => {
	const data = await axios({
		method: 'GET',
		url: `/productos/${id}`,
	});

	return data.data;
};

export const updateProducto = async (id: string, clientInfo: any) => {
	console.log('clientInfo: ', clientInfo);
	const data = await axios({
		method: 'PATCH',
		url: `/productos/${id}`,
		data: JSON.stringify(clientInfo),
	});

	return data.data;
};

export const createProducto = async (clientInfo: any) => {
	const data = await axios({
		method: 'POST',
		url: `/productos/create`,
		data: JSON.stringify(clientInfo),
	});

	return data.data;
};

export const deleteProducto = async (id: string) => {
	const data = await axios({
		method: 'DELETE',
		url: `/productos/${id}`,
	});

	return data.data;
};
