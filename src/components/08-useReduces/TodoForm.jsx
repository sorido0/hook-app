import React from 'react'
import { useForms } from '../../hooks/useForms';

export const TodoForm = ( { nuevoState } ) => {

    const {  Descripcion, handleInput, formsRecet } = useForms(
        {   
            Descripcion: ''
        }
    );
        
    const envioFormulario = (e) => {
        
        e.preventDefault();

        if(Descripcion.length <= 1 ) return;

        const newState = {
            id: new Date().getTime(),
            Descripcion: Descripcion,
            Completado: false,
        }

        nuevoState(newState);
        console.log(Descripcion);
    }

    return (
        <>
            <form onSubmit={ envioFormulario }>
                <input
                    type="text"
                    placeholder='Que aremos?'
                    className='form-control'
                    name='Descripcion'
                    value={ Descripcion }
                    onChange={ handleInput }
                />

                <button
                    type='submit'
                    className='btn btn-primary mt-2'
                    >
                    Agregar
                </button>
            </form>
        </>
    )
}
