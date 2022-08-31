import axios from '../config/axios';

export const getMarcas = async () => {
	const data = await axios({
		method: 'GET',
		url: '/marcas',
	});

	return data.data;
};

export const getMarca = async (id: string) => {
	const data = await axios({
		method: 'GET',
		url: `/marcas/${id}`,
	});

	return data.data;
};

export const updateMarcas = async (id: string, clientInfo: any) => {
	const data = await axios({
		method: 'PATCH',
		url: `/marcas/${id}`,
		data: JSON.stringify(clientInfo),
	});

	return data.data;
};

export const createMarca = async (clientInfo: any) => {
	const data = await axios({
		method: 'POST',
		url: `/marcas/create`,
		data: JSON.stringify(clientInfo),
	});

	return data.data;
};

export const deleteMarca = async (id: string) => {
	const data = await axios({
		method: 'DELETE',
		url: `/marcas/${id}`,
	});

	return data.data;
};
