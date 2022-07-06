import axiosPackage from 'axios';

const axios = axiosPackage.create({
	baseURL: 'https://atp-web-hddjv.ondigitalocean.app',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default axios;
