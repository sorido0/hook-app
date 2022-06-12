
import { useState, useEffect, useRef } from 'react';


export const useFetch = (url) => {

    const esMontado = useRef(true);

    const [state, setState] = useState({ data: null, loading: true, error: null }); // useState valida el estado de los datos

    useEffect(() => {
        return () => {
            esMontado.current = false;
        }
    }, []);

    useEffect(() => {

        setState({ data: null, loading: true, error: null });

        fetch(url)
            .then(response => response.json())
            .then(data => {

                if (esMontado.current) {
                    setState({ data, loading: false, error: null });
                }
            });
    }, [url]);

    return state;
}
