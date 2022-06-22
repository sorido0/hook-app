


// Este mi reducer es el que se encarga de manejar los estados de la aplicación.
export const todoReducer = (estadoIniciar = [], action ) => {
  
    // console.log(action); Para como esta formada la accion.
    console.log(action)
    switch (action.type) {
        // Si la accion es agregar una todo o tarea. 
        case 'agregar':
            // se envia el estado actual con expres (...) y la accion que se va a realizar agregando una nueva todo o tarea.
            return [...estadoIniciar, action.descripcion]
    
        default:
            // Si no se cumple ninguna de las condiciones anteriores, se retorna el estado actual.
            return estadoIniciar;
    }
}
