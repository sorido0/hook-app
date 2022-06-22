import React from 'react'


// TodosItem: es un componente que se encarga de mostrar una tareas dentro de la lista de tareas.
export const TodosItem = ( { todo } ) => {
    return (
        <>
            <li 
                className='list-group-item justify-content-between d-flex'>
                <samp className='aling-self-center'>{todo.descripcion}</samp>
                {/* <button> Se quien se carga de eliminar una tarea o estado del TodoApp</button> */}
                <button className='btn btn-danger btn-sm float-right' > Borrar </button>
            </li>
        </>
    )
}
