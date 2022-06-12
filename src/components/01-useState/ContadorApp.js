import React, { useState } from 'react';

import '../01-useState/contadorApp.css';

export const ContadorApp = () => {

    const [contador, setContador] = useState({
        numero1: 10,
        numero2: 20
    });

    const { numero1, numero2 } = contador;

    const sumar = () => {
        setContador( {...contador, numero1: numero1 + 1});
    }

    const restar = () => { 
        setContador({...contador, numero1: numero1 - 1});
    }

    const reset = () => {
        setContador({...contador, numero1: numero1 - numero1});
    }

  return (
    <>
        <h1> Contadores </h1>
        <p> { numero1 } </p>
        <p> { numero2 } </p>


        <p> Dev. sordio0 </p>
        
        <hr />

        <button className='btn btn-primary m-2' 
        onClick={sumar}> + </button>

        <button className='btn btn-primary m-2' 
        onClick={restar}> - </button>

        <button className='btn btn-primary m-2' 
        onClick={reset}> Reiniciar </button>
    </>
  )
}
