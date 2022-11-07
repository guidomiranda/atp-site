import axios from '../config/axios';

export const getEmpresas = async () => {
	const data = await axios({
		method: 'GET',
		url: '/empresas',
	});

	return data.data;
};

export const getEmpresa = async (id: string) => {
	const data = await axios({
		method: 'GET',
		url: `/empresas/${id}`,
	});

	return data.data;
};

export const updateEmpresa = async (id: string, clientInfo: any) => {
	console.log('clientInfo: ', clientInfo);
	const data = await axios({
		method: 'PATCH',
		url: `/empresas/${id}`,
		data: JSON.stringify(clientInfo),
	});

	return data.data;
};

export const createEmpresa = async (clientInfo: any) => {
	const data = await axios({
		method: 'POST',
		url: `/empresas/create`,
		data: JSON.stringify(clientInfo),
	});

	return data.data;
};

export const deleteEmpresa = async (id: string) => {
	const data = await axios({
		method: 'DELETE',
		url: `/empresas/${id}`,
	});

	return data.data;
};
