import React from 'react'

export const TodosItem = ( { todo } ) => {
    return (
        <>
            <li 
                className='list-group-item justify-content-between d-flex'>
                <samp className='aling-self-center'>{todo.descripcion}</samp>
                <button className='btn btn-danger btn-sm float-right' > Borrar </button>
            </li>
        </>
    )
}
