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


