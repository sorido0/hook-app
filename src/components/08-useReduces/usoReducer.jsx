import '../01-useState/contadorApp.css';
import { TodosLista } from './TodosLista';
import { TodoForm } from './TodoForm';


export const AppReducer = () => {
    
    return (
        <>
            <h1>App Reducer</h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodosLista />
                </div>

                <div className="col-5">
                    <h3>Tareas</h3>
                    <hr />
                    <TodoForm />
                </div>

            </div>


        </>
    )
}
