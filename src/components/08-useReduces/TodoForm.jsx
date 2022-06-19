import React from 'react'
import { useForms } from '../../hooks/useForms';

export const TodoForm = () => {

    const { Forms, handleInput } = useForms();    
    const addNewTodos = (e) => {
        e.preventDefault();
        console.log('todo form');
    }

    return (
        <>
            <form >
                <input
                    type="text"
                    placeholder='Que aremos?'
                    className='form-control'
                />

                <button
                    type='submit'
                    className='btn btn-primary mt-2'
                    onClick={addNewTodos}>
                    Agregar
                </button>
            </form>
        </>
    )
}
