import axios from '../config/axios';

export const getClients = async () => {
	const data = await axios({
		method: 'GET',
		url: '/client',
	});

	return data.data;
};

export const getClient = async (id: string) => {
	const data = await axios({
		method: 'GET',
		url: `/client/${id}`,
	});

	return data.data;
};

export const updateClient = async (id: string, clientInfo: any) => {
	const data = await axios({
		method: 'PATCH',
		url: `/client/${id}`,
		data: JSON.stringify(clientInfo),
	});

	return data.data;
};

export const createClient = async (clientInfo: any) => {
	const data = await axios({
		method: 'POST',
		url: `/client/create`,
		data: JSON.stringify(clientInfo),
	});

	return data.data;
};

export const deleteClient = async (id: string) => {
	const data = await axios({
		method: 'DELETE',
		url: `/client/${id}`,
	});

	return data.data;
};
