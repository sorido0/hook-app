import React from 'react'

import '../02-useEffect/useEfecct.css';
import { useFetch } from './../../hooks/useFetch';
import { useContador } from './../../hooks/useContador';

export const MulplesHooks = () => {

    const { Sumar, contador } = useContador(1);

    const { loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${ contador }`);

    const { author, quote } = !!data && data[0];
    console.log(author, quote);
  return (
    <>
        <h1> breaking badapi Quotes</h1>
        <hr />

        {
          loading 
          ? 
            (	
              <div className='alert alert-info text-center'> 
              Loadig... 
              </div>
            )
          :
            (       
              <blockquote className='blockquote text-right'>
                <p className='mb-1'> { quote } </p>
                <footer className='blockquote-footer'> { author }</footer>
              </blockquote>
            )
        }

        <button className='btn btn-primary' onClick={ Sumar }> next quote </button>
    </>  
    
  )
}
