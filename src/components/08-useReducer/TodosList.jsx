import React from 'react'
import { TodosItem } from './TodosItem'

export const TodosList = ({ todos, handleDeleteTodo, TareaCompletada }) => {

    return (
        <>
            <ul className='list-group'>
                {
                    todos.map((todo) => (
                        // TodosItem... debe de recibir la descripcion y el done
                        <TodosItem 
                        key={todo.id} 
                        todo={todo} 
                        handleDeleteTodo={handleDeleteTodo} 
                        TareaCompletada={TareaCompletada} 
                        />
                    )
                    )
                }
            </ul>
        </>
    )
}
