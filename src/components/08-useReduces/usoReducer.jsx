import '../01-useState/contadorApp.css';
import { TodosLista } from './TodosLista';
import { TodoForm } from './TodoForm';

export const AppReducer = () => {

    // Con esto vemos el neuvo estado de los todos
    const unNuevoState = ( state ) =>  {
        console.log( { state } );
    }
    
    return (
        <>
            {/* Rederizamos todo la aplicacion */}
            <h1>App Reducer</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    {/* Este el componente para ver las lista de tarea */}
                    <TodosLista />
                </div>

                <div className="col-5">
                    <h3>Tareas</h3>
                    <hr />
                    {/* Este el componente para ver las Para agragar una tarea */}
                    <TodoForm nuevoState={ unNuevoState } />
                </div>
            </div>


        </>
    )
}
