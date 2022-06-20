


//Estado iniciar de los todos,  estan rederizado en un componente
//y se actualizan cuando se hace un cambio en el estado
export const Lostodos = () => {
    const estadoIniciar = [
        {
            id: new Date().getTime(),
            Descripcion: 'Recolectar las piedras del infinito',
            Completado: false,
        }
        ,
        {
            id: new Date().getTime() * 3,
            Descripcion: 'Primera piedra, Piedra del alma',
            Completado: false,
        }
    ];
    return estadoIniciar;
}


