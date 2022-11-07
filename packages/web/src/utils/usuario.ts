import axios from '../config/axios';

export const getUsuarios = async () => {
	const data = await axios({
		method: 'GET',
		url: '/usuarios',
	});

	return data.data;
};

export const getUsuario = async (id: string) => {
	const data = await axios({
		method: 'GET',
		url: `/usuarios/${id}`,
	});

	return data.data;
};

export const updateUsuario = async (id: string, clientInfo: any) => {
	console.log('clientInfo: ', clientInfo);
	const data = await axios({
		method: 'PATCH',
		url: `/usuarios/${id}`,
		data: JSON.stringify(clientInfo),
	});

	return data.data;
};

export const createUsuario = async (clientInfo: any) => {
	const data = await axios({
		method: 'POST',
		url: `/usuarios/create`,
		data: JSON.stringify(clientInfo),
	});

	return data.data;
};

export const deleteUsuario = async (id: string) => {
	const data = await axios({
		method: 'DELETE',
		url: `/usuarios/${id}`,
	});

	return data.data;
};
