import React from 'react'
import { useForms } from '../../hooks/useForms'


// Este es el componente que se importa en el componente TodoApp.jsx
// Este componente se encarga de agregar una nueva tarea.
// Se recibe la funcion unNuevoTodo(todos) que se ejecuta al presionar el boton para agregar una nueva tarea.
export const TodoAdd = ( {unNuevoTodo} ) => {
    
    // useForms: es nuestro Hooks para manejar el formulario.
    //en este caso se recibe un objeto un propiedades De descripcion y una funcion que se ejecuta al presionar el boton.:
    const { descripcion, handleInput, formsRecet} = useForms({
        descripcion: '',
    });

    const onFormsSubmit = (e) => {

        // Evita que se recargue la pagina
        e.preventDefault();
        
        //Se validad que la descripcion no este vacia
        if( descripcion.length <= 1 )return;

        // Se crea la nueva tarea o nuevoTodo como un objeto con las propiedades id, descripcion y done.
        const nuevoTodo = {
            id: new Date().getTime(),
            descripcion: descripcion,
            done: false,
        }

        // Se ejecuta la funcion unNuevoTodo(todos) que se recibe como propiedad en el componente TodoApp.jsx
        unNuevoTodo(nuevoTodo);

        // Se limpia el formulario
        formsRecet();
       
    }
    // Fin TodoAdd
    // Se retorna un formulario con un input para agregar una nueva tarea.
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
