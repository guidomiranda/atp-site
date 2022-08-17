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
