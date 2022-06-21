import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { TodosList } from './TodosList';
import { TodoAdd } from './TodoAdd';

const estadoIniciar = [
    {
        id: new Date().getTime(),
        descripcion: 'Recolectar las piedras el infinito',
        done: false
    }
    ,
    {
        id: new Date().getTime() * 3,
        descripcion: 'Piedras el poder',
        done: false
    }
];


export const TodoApp = () => {

    const [todos, dispatch] = useReducer(todoReducer, estadoIniciar);
    
    const handleNewTodo = (todo) => {
        console.log( { todo } )
    }
    return (
        <>
            <h1> Tareas: 10 <small> pendientes: 2 </small> </h1>
            <hr />

            <div class="row">
                <div className="col-7">
                    {/* TodosList */}
                    <TodosList todos={todos} />
                    {/* Fin TodosList */}
                </div>


                <div className="col-5">
                    <h4> Agragra tarea </h4>
                    <hr />

                    {/* TodoAdd unNuevoTodo(todos)*/}
                    {/* { id, descripcion ,done }*/}
                    <TodoAdd unNuevoTodo={ handleNewTodo }/>
                    {/* Fin TodoAdd*/}
                </div>
            </div>

        </>
    )
}
