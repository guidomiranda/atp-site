import { useEffect, useState } from 'react';
import {API_URL} from '../utils/constants';

export const useFetch = (url) => {
	const [data, setData] = useState(null);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(null);

	useEffect(() => {
		const abortControler = new AbortController();
		const signal = abortControler.signal;

		const fetchData = async() => {
			setIsLoading(true);

			try {
				const res = await fetch(API_URL +'/'+url);
				
				if(!res.ok){
					let err = new Error("Error en la peticion Fetch");
					error.status = res.status || '00';
					error.statusText = res.statusText || 'Ocurrio un error';
					throw err;
				}

				const data = await res.json();
				

				if(!signal.aborted){
					setData(data);
					setError(null);
				}
			} catch (error) {
				if(!signal.aborted){
					setData(null);
					setError(error);
				}
			} finally {
				if(!signal.aborted){
					setIsLoading(false);
				}				
			}
		};
		fetchData();

		return ()=> abortControler.abort();
	}, [url]);

	return {data,error,isLoading}

	
};
