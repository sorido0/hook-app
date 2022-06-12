import React from 'react'
import '../01-useState/contadorApp.css';
import { MulplesHooks } from './../03-ejemplos/MulplesHooks';
import { useShow } from './../../hooks/useShow';

export const RealEjemploRef = () => {

    const {show, handleClShow}  = useShow();

  return (
    <>
        <h1>Real Ejemplo Ref</h1>
        <hr />

        { show && <MulplesHooks />}

        <button 
            className='btn btn-primary m-2'
            onClick={ handleClShow }>  Show 
        </button>
    </>
  )
}
