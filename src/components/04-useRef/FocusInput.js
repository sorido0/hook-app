import React, { useRef } from 'react'
import '../01-useState/contadorApp.css';

export const FocusInput = () => {

    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }

  return (
    <>
        <h1>Focus Input</h1>
        <hr />

        <input 
        ref={ inputRef }
        className='form-control' 
        placeholder='Su nombre' />

        <button 
        className='btn btn-outline-primary mt-2' 
        onClick={ handleClick }>
        Focus 
        </button>
    </>
  )
}
