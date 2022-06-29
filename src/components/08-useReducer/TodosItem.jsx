import React from 'react'


// TodosItem: es un componente que se encarga de mostrar una tareas dentro de la lista de tareas.
export const TodosItem = ({ todo, handleDeleteTodo, TareaCompletada }) => {
    return (
        <>
            <li
                className='list-group-item justify-content-between d-flex'
                name='lista'
                data-testid='todo-list'>
                <samp
                    className={`aling-self-center ${(todo.done) ? "text-decoration-line-through" : ""}`}
                    onClick={() => TareaCompletada(todo.id)}
                    data-testid='todo-item-spam'
                >

                    {todo.descripcion}
                </samp>
                {/* <button> Se quien se carga de eliminar una tarea o estado del TodoApp</button> */}
                <button className='btn btn-danger btn-sm float-right'
                    onClick={() => handleDeleteTodo(todo.id)}
                    data-testid='todo-item-button'
                    > Borrar </button>
            </li>
        </>
    )
}
