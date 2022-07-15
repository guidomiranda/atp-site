import axios from '../config/axios';

export const getLubricantes = async (type: string) => {
	const data = await axios({
		method: 'GET',
		url: `/${type}`,
	});

	console.log(data);

	return data.data;
};
