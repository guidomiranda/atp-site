import axiosPackage from 'axios';

const axios = axiosPackage.create({
	baseURL: 'https://atp-bh46i.ondigitalocean.app/',
	headers: {
		'Content-Type': 'application/json',
	},
});

export default axios;
