import React, { useReducer } from 'react';
import { todoReducer } from './todoReducer';
import { Lostodos } from './Lostodos';
import { TodoItem } from './TodoItem';

const lostodos = Lostodos();


export const TodosLista = () => {

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
