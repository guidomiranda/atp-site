import axios from '../config/axios';

export const getReviews = async () => {
	const data = await axios({
		method: 'GET',
		url: '/review',
	});

	return data.data;
};

export const getReview = async (id: string) => {
	const data = await axios({
		method: 'GET',
		url: `/review/${id}`,
	});

	return data.data;
};

export const updateReview = async (id: string, testimonial: any) => {
	const data = await axios({
		method: 'PATCH',
		url: `/review/${id}`,
		data: JSON.stringify(testimonial),
	});

	return data.data;
};
