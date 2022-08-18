import axios from '../config/axios';

export const getProducts = async () => {
	const data = await axios({
		method: 'GET',
		url: `/filtros`,
	});

	return data.data;
};

export const getProductsByLine = async (line: string) => {
	const data = await axios({
		method: 'GET',
		url: `/filtros/linea/${line}`,
	});

	return data.data;
};

export const getFiltro = async (id: string) => {
	const data = await axios({
		method: 'GET',
		url: `/filtros/${id}`,
	});

	return data.data;
};

export const updateFiltro = async (id: string, filtroInfo: any) => {
	const data = await axios({
		method: 'PATCH',
		url: `/filtros/${id}`,
		data: JSON.stringify(filtroInfo),
	});

	return data.data;
};

export const createFiltro = async (filtroInfo: any) => {
	const data = await axios({
		method: 'POST',
		url: `/filtros/create`,
		data: JSON.stringify(filtroInfo),
	});

	return data.data;
};

export const deleteFiltro = async (id: string) => {
	const data = await axios({
		method: 'DELETE',
		url: `/filtros/${id}`,
	});

	return data.data;
};
