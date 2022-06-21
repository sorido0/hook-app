



export const todoReducer = (estadoIniciar = [], action ) => {
  
    console.log(action)
    switch (action.type) {
        case 'agregar':
            return [...estadoIniciar, action.descripcion]
    
        default:
            return estadoIniciar;
    }
}
