import axios from '../config/axios';

export const getProductsByLine = async (line: string) => {
	const data = await axios({
		method: 'GET',
		url: `/filter/line/${line}`,
	});

	return data.data;
};
