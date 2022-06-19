
export const todoReducer = (estadoInicial = [], accion = {} ) => {
    switch (accion.type) {
        case 'ABC':
            throw new Error('Accion.type no existe o no esta definido');
    
        default:
            return estadoInicial;
    }
}