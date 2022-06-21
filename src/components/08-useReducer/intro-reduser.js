
// El estado iniciar 
const estadoIniciar = [{
    id: 1,
    todo: 'Recolectar las pidras del infinito',
    done: false,
}];

// El reducer que recibe el estado iniciar y espera la accion 
const todoReducer = ( estado = estadoIniciar, action = {} ) => {

    // se valida la accion 
    if( action.type === 'agregar'){
        return [ ...estado, action.agregar]
    }

    // si no  recibe la acciion regresa el estado iniciar. 
    return estado 
}

// vemos el estado actual del reducer
let todos = todoReducer();

// enviamos el nuevo estado al todoReducer
const nuevosTodos = {
    id: 2,
    todo: 'Piedra del poder',
    done: false,
}

// Definimos la action que enviaremos al reducer
const agregarTodos = {
    type: 'agregar',
    agregar: nuevosTodos,
}

// enviamos el estado anterior y la action al reducer
todos = todoReducer(todos, agregarTodos);

console.log({state: todos});