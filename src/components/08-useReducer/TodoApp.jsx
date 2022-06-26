import React from 'react'
//import { todoReducer } from './todoReducer';
import { TodosList } from './TodosList';
import { TodoAdd } from './TodoAdd';
import { useTodo } from '../../hooks/useTodo';


// inicio de la App
export const TodoApp = () => {

    // importamos el useTodo 
   const { todos, handleNewTodo, handleDeleteTodo, TareaCompletada, contarTareas, pediente } = useTodo();   

    return (
        <>
            <h1> Tareas: { contarTareas  } <small> pendientes: { pediente } </small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* Aqui se importa el componente Todolist */}
                    <TodosList todos={ todos } handleDeleteTodo={ handleDeleteTodo } TareaCompletada={ TareaCompletada }/>
                    {/* Fin TodosList */}
                </div>


                <div className="col-5">
                    <h4> Agragra tarea </h4>
                    <hr />

                    {/* TodoAdd unNuevoTodo(todos) se ejecuta para emplear el nuevo estado o todo */}
                    <TodoAdd unNuevoTodo={ handleNewTodo }/>
                </div>
            </div>

        </>
    )
}
