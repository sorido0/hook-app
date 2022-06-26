import React from 'react'


// TodosItem: es un componente que se encarga de mostrar una tareas dentro de la lista de tareas.
export const TodosItem = ({ todo, handleDeleteTodo, TareaCompletada }) => {
    return (
        <>
            <li
                className='list-group-item justify-content-between d-flex'>
                <samp
                    className={`aling-self-center ${(todo.done) ? "text-decoration-line-through" : ""}`}
                    onClick={() => TareaCompletada(todo.id)}
                >

                    {todo.descripcion}
                </samp>
                {/* <button> Se quien se carga de eliminar una tarea o estado del TodoApp</button> */}
                <button className='btn btn-danger btn-sm float-right'
                    onClick={() => handleDeleteTodo(todo.id)}> Borrar </button>
            </li>
        </>
    )
}
