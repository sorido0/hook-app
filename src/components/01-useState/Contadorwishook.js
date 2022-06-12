import React from 'react'
import './contadorApp.css';
import { useContador } from './../../hooks/useContador';

export const Contadorwishook = () => {


    const { contador, Sumar, Restar, Reiniciar } = useContador(0);


  return (
    <>
        <h1> Contador { contador } </h1>

        <hr />

        <button 
        className='btn m-1'
        onClick={ Sumar } > + 1 </button>

        <button 
        className='btn m-1'
        onClick={ Restar } > - 1 </button>

        <button className='btn m-1'
        onClick={ Reiniciar } > Reiniciar </button>
    </>
  )
}
