import axios from '../config/axios';

export const sendMailContact = async (data: any) => {
	try {
		const response = await axios({
			method: 'POST',
			url: '/contacto',
			data: JSON.stringify(data),
		});

		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};

export const sendMailWork = async (data: any) => {
	try {
		const response = await axios({
			method: 'POST',
			url: '/contacto/postulacion',
			data: JSON.stringify(data),
		});

		return response.data;
	} catch (error) {
		console.log(error);
		return null;
	}
};
