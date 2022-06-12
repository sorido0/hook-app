import React, { useLayoutEffect, useRef, useState } from 'react'

import '../02-useEffect/useEfecct.css';
import { useFetch } from './../../hooks/useFetch';
import { useContador } from './../../hooks/useContador';

export const Layout = () => {

    const { Sumar, contador } = useContador(1);

    const { data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ contador }`);
    const { quote } = !!data && data[0];

    const parrafo = useRef();

    const [boxZice, setBoxZice] = useState();
    
    useLayoutEffect(() => {
        setBoxZice(parrafo.current.getBoundingClientRect());
    }, [quote]);

  return (
    <>
        <h1> Layout Quotes</h1>
        <hr />
      
              <blockquote className='blockquote text-end'>
                <p 
                className='mb-1'
                ref={ parrafo }> 
                    { quote } 
                    </p>
              </blockquote>

              <pre>
                  { JSON.stringify(boxZice, null, 2) }
              </pre>

        <button className='btn btn-primary' onClick={ Sumar }> next quote </button>
    </>  
    
  )
}

