import React from 'react'
import { useFetch, useContador } from './../../hooks/';

import '../02-useEffect/useEfecct.css';
import { Loading } from './Loading';
import { Quote } from './Quote';

export const MulplesHooks = () => {

  //importamos el hook useFetch
  const { Sumar, contador } = useContador(1);

  // importamos el hook useFetch y lo desestructuramos
  const {  data, isloading, error } = useFetch(`https://www.breakingbadapi.com/api/quotes/${contador}`);

  // si hay un error lo mostramos
  //================================================================console.log({ data, isloading, error });

  // Valido que exista la data
  const { author, quote } = !!data && data[0];

  // si hay un error lo mostramos
  //================================================================console.log({ data, isloading, error });

  //==========================================================================console.log(author, quote);
  return (
    <>
      <h1> breaking badapi Quotes</h1>
      <hr />


      {
        // si islading es true no se muestra. 
        isloading ?
        (
         <Loading />
        )
        :
        // si lo isloading es false se muestra el contenido
        (
          <Quote author={ author } quote={ quote }  />
        )
      }
      
      <button className='btn btn-primary' onClick={Sumar} disabled={ isloading }> next quote </button>
    </>

  )
}
