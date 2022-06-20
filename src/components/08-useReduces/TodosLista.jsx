import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { Lostodos } from './Lostodos';
import { TodoItem } from './TodoItem';

// importacion de los Todos
const lostodos = Lostodos();


export const TodosLista = () => {

    // useReducer() es un hook que nos permite crear un estado con un reducer
    // El state es donde los datos se guardan y el dispatch es donde se ejecutan las acciones
    const [state, dispatch] = useReducer(todoReducer, lostodos);
    return (

        <>
            <ul className='list-group'>
                {state.map( state => (
                  <TodoItem key={state.id} state={state} />
                ))
                }
            </ul>
        </>

    )
}
