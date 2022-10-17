import axiosPackage from 'axios';
import { API_URL } from '../utils/constants';



const axios = axiosPackage.create({
	baseURL: API_URL,
	headers: {
		'Content-Type': 'application/json',
	},
	proxy: false,
});

export default axios;
