export const TodoItem = ({state}) => {
    return (
        <>
            <li
                key={state.id}
                className=' list-group-item d-flex justify-content-between align-items-center'
            >
                <samp> {state.Descripcion} </samp>
                <button className='btn btn-danger btn-sm float-right'>Eliminar</button>
            </li>
        </>
    )
}

// onClick={() => dispatch({ type: 'ELIMINAR', id: state[0].id })}
