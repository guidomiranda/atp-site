import axiosPackage from 'axios';

const axios = axiosPackage.create({
	baseURL: 'https://atp-web-quoj2.ondigitalocean.app/',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default axios;
