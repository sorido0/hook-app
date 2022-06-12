import React, { useMemo } from 'react'
import { useContador } from './../../hooks/useContador';
import { useShow } from './../../hooks/useShow';
import { procesoPesado } from './../../helpers/ProcesoPesado';


import './../02-useEffect/useEfecct.css';



export const MemoHooks = () => {

    const { show, handleClShow } = useShow();
    const { Sumar, contador } = useContador(2500 );
    const memoizedProcess = useMemo(() => procesoPesado(contador), [contador]);

  return (
    <>
        <h1> Memo Hooks </h1>
        <h2> Contador <small> { contador }</small> </h2>
        <hr />

        <p> { memoizedProcess }</p>

        <button className='btn btn-primary' onClick={ Sumar }> next quote </button> 
        <button className='btn btn-outline-primary ms-2' onClick={ handleClShow }> Hiden/show { JSON.stringify( show )}  </button>
    </>
  )
}
