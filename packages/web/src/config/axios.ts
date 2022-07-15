import axiosPackage from 'axios';

const axios = axiosPackage.create({
	baseURL: 'https://atp-web-ahlis.ondigitalocean.app',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default axios;
