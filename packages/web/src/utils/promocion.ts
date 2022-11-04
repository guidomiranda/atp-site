import axios from '../config/axios';

export const getPromociones = async () => {
	const data = await axios({
		method: 'GET',
		url: '/promociones',
	});

	return data.data;
};

export const getPromocion = async (id: string) => {
	const data = await axios({
		method: 'GET',
		url: `/promociones/${id}`,
	});

	return data.data;
};

export const updatePromocion = async (id: string, clientInfo: any) => {
	console.log('clientInfo: ', clientInfo);
	const data = await axios({
		method: 'PATCH',
		url: `/promociones/${id}`,
		data: JSON.stringify(clientInfo),
	});

	return data.data;
};

export const createPromocion = async (clientInfo: any) => {
	const data = await axios({
		method: 'POST',
		url: `/promociones/create`,
		data: JSON.stringify(clientInfo),
	});

	return data.data;
};

export const deletePromocion = async (id: string) => {
	const data = await axios({
		method: 'DELETE',
		url: `/promociones/${id}`,
	});

	return data.data;
};
