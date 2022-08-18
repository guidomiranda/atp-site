import axios from '../config/axios';

export const getBatteries = async () => {
	const data = await axios({
		method: 'GET',
		url: `/product`,
	});

	return data.data;
};

export const getBattery = async (id: string) => {
	const data = await axios({
		method: 'GET',
		url: `/product/${id}`,
	});

	return data.data;
};

export const updateBattery = async (id: string, batteryInfo: any) => {
	const data = await axios({
		method: 'PATCH',
		url: `/product/${id}`,
		data: JSON.stringify(batteryInfo),
	});

	return data.data;
};

export const createBattery = async (batteryInfo: any) => {
	const data = await axios({
		method: 'POST',
		url: `/product/create`,
		data: JSON.stringify(batteryInfo),
	});

	return data.data;
};

export const deleteBattery = async (id: string) => {
	const data = await axios({
		method: 'DELETE',
		url: `/product/${id}`,
	});

	return data.data;
};
