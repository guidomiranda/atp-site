import axios from '../config/axios';

export const updateVacancia = async (id: string, vacanciaInfo: any) => {
	const data = await axios({
		method: 'PATCH',
		url: `vacancias/${id}`,
		data: JSON.stringify(vacanciaInfo),
	});

	return data.data;
};

export const getVacancia = async (id: string) => {
	const data = await axios({
		method: 'GET',
		url: `/vacancias/${id}`,
	});

	return data.data;
};

export const deleteVacancia = async (id: string) => {
	const data = await axios({
		method: 'DELETE',
		url: `/vacancias/${id}`,
	});

	return data.data;
};

export const createVacancia = async (vacanciaInfo: any) => {
	const data = await axios({
		method: 'POST',
		url: `/vacancias/create`,
		data: JSON.stringify(vacanciaInfo),
	});

	return data.data;
};
