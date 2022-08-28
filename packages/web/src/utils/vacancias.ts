import axios from '../config/axios';

export const updateVacancia = async (id: string, vacanciaInfo: any) => {
	const data = await axios({
		method: 'PATCH',
		url: `vacancias/${id}`,
		data: JSON.stringify(vacanciaInfo),
	});

	return data.data;
};
