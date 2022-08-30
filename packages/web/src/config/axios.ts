import axiosPackage from 'axios';

const axios = axiosPackage.create({
	baseURL: 'https://atp-lrhot.ondigitalocean.app/',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default axios;
