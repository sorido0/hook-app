import React from 'react'
import { useContador } from './../../hooks/useContador';

import './../02-useEffect/useEfecct.css';
import { Memoshow } from './Memoshow';
import { useShow } from './../../hooks/useShow';


export const Memoria = () => {

    const { show, handleClShow } = useShow();

    const { Sumar, contador } = useContador(1);

  return (
    <>
        <h1> Contador <Memoshow value={ contador }/> </h1>
        <hr />

        <button className='btn btn-primary' onClick={ Sumar }> next quote </button> 

        <button className='btn btn-outline-primary ms-2' onClick={ handleClShow }> Hiden/show { JSON.stringify( show )}  </button>
    </>
  )
}
