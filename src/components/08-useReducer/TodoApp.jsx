import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { TodosList } from './TodosList';
import { TodoAdd } from './TodoAdd';


// Estado inicial reducer
const estadoIniciar = [
    //El estado es un array de objetos que esta formado de dos propiedades: id , descripcion y dona: es un booleano 
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

// inicio de la App
export const TodoApp = () => {

    // useReducer: recibe un reducer y un estado inicial
    const [todos, dispatch] = useReducer(todoReducer, estadoIniciar);
    
    // Funcion que se ejecuta al presionar el boton para agregar una nueva tarea
    const handleNewTodo = (todo) => {
        const action = {
            type: 'agregar',
            descripcion: todo,
        }

        // dispatch: ejecuta el reducer
        dispatch( action );
        // console.log(todos); muestra el estado actual del nuevo estado. 
        console.log(todo);
    }


    return (
        <>
            <h1> Tareas: 10 <small> pendientes: 2 </small> </h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* Aqui se importa el componente Todolist */}
                    <TodosList todos={ todos } />
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
