import axios from '../config/axios';

export const getAllLubricantes = async () => {
	const data = await axios({
		method: 'GET',
		url: `lubricantes`,
	});

	return data.data;
};

export const getLubricantes = async (type: string) => {
	const data = await axios({
		method: 'GET',
		url: `lubricantes/linea/${type}`,
	});

	return data.data;
};

export const getLubricante = async (id: string) => {
	const data = await axios({
		method: 'GET',
		url: `lubricantes/${id}`,
	});

	return data.data;
};

export const createLubricante = async (lubricanteInfo: any) => {
	const data = await axios({
		method: 'POST',
		url: `lubricantes/create`,
		data: JSON.stringify(lubricanteInfo),
	});

	return data.data;
};

export const updateLubricante = async (id: string, lubricanteInfo: any) => {
	const data = await axios({
		method: 'PATCH',
		url: `lubricantes/${id}`,
		data: JSON.stringify(lubricanteInfo),
	});

	return data.data;
};

export const deleteLubricante = async (id: string) => {
	const data = await axios({
		method: 'DELETE',
		url: `lubricantes/${id}`,
	});

	return data.data;
};
