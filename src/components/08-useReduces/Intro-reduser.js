// estado inicial del reducer
const estadoInicial = [
    {
    id: 1,
    todo: 'Recolectar las piedras del infinito',
    done: false,

    }
];


// El reducer es una funcion que recibe dos parametros: el estado actual y el action
// El estado actual es el estado inicial
// El action es un objeto que contiene la accion que se va a realizar
const todoReducer = ( estado = estadoInicial, action = {} ) => {

    if (action.type === '[Todo] Agregar todo') {
        return [ ...estado, action.payload ];
    }
    return estado;
}

let todos = todoReducer();

// De esta forma se puede modificar el estado inicial
const newTodo = {
    id: 2,
    todo: 'Recolectar las piedras del alma',
    done: false,
}

// Esta accion se va a realizar, para agregar un nuevo todo.
const agragarTodoAction = {
    type: '[Todo] Agregar todo',
    payload: newTodo,
}

// De esta forma utilizamos el reducer
todos = todoReducer(todos, agragarTodoAction);

console.log({state: todos});
