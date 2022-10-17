import { useEffect, useState } from 'react'

export const useFetch = (url:string) => {

    const [state, setState] = useState({
        data1: null,
        isLoading: true,
        hasError: null,
    })

    const getData= async() => {

        setState({
            ...state,
            isLoading: true,
        });

        const resp = await fetch(url);
        const data1 = await resp.json();

        setState({
            data1,
            isLoading: false,
            hasError: null
        });
    }


    useEffect(() => {
      getData();
    }, [url])
    



    return {
        data: state.data1,
        isLoading: state.isLoading,
        hasError: state.hasError
    }
}
