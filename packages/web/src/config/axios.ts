import axiosPackage from 'axios';

const axios = axiosPackage.create({
	baseURL: 'https://dolphin-app-g3w9y.ondigitalocean.app/',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default axios;
