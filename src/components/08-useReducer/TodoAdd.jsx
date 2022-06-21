import React from 'react'
import { useForms } from '../../hooks/useForms'

{/* TodoAdd unNuevoTodo(todos)*/ }
{/* { id, descripcion ,done }*/ }
{/* Fin TodoAdd*/ }





export const TodoAdd = ( {unNuevoTodo} ) => {
    
    const { descripcion, handleInput, formsRecet} = useForms({
        descripcion: '',
    });

    const onFormsSubmit = (e) => {

        e.preventDefault();
        
        if( descripcion.length <= 1 )return;

        const nuevoTodo = {
            id: new Date().getTime(),
            descripcion: descripcion,
            done: false,
        }

        unNuevoTodo(nuevoTodo);
        formsRecet();
       
    }
    return (
        <>
            <form onSubmit={ onFormsSubmit }>
                <input
                    type="text"
                    placeholder='Que aremos?'
                    className="form-control"
                    name='descripcion'
                    value={ descripcion }
                    onChange={ handleInput }
                />

                <button type="submit" className="btn btn-auline-primary m-1"> Agregar </button>
            </form>
        </>
    )
}
