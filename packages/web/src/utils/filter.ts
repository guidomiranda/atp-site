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
