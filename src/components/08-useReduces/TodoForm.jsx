import React from 'react'
import { useForms } from '../../hooks/useForms';

// EL componente TodoForm se encarga de crear un nuevo todo y agregarlo a la lista de todos.
export const TodoForm = ( { nuevoState } ) => {


    // useForms() es el hooks para crear formulario :D)
    const {  Descripcion, handleInput, formsRecet } = useForms(
        {   
            Descripcion: ''
        }
    );
        
    const envioFormulario = (e) => {
        
        // Evitamos que se reinice la pagina
        e.preventDefault();

        //Con esta condicion validamos que el campo Descripcion no este vacio
        if(Descripcion.length <= 1 ) return;

        // Creamos un nuevo todo con los datos del formulario
        const newState = {
            id: new Date().getTime(),
            Descripcion: Descripcion,
            Completado: false,
        }

        // Agregamos el nuevo todo a la lista de todos
        nuevoState(newState);

        //Observamos por consola el nuevo todo
        console.log(Descripcion);

        // Reiniciamos el formulario
        formsRecet();
    }

    return (
        <>
            {/* Enviamos la descripcion  y renderizamos*/}
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
