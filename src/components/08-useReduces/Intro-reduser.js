const estadoInicial = [
    {
    id: 1,
    todo: 'Recolectar las piedras del infinito',
    done: false

    }
];

const todoReducer = ( estato = estadoInicial, action ) => {

    return estato;
}

let todos = todoReducer();
console.log(todos);
