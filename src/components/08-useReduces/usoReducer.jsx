import '../01-useState/contadorApp.css';
import { TodosLista } from './TodosLista';
import { TodoForm } from './TodoForm';
import { Lostodos } from './Lostodos';
import { useReducer } from 'react';
import { todoReducer } from './todoReducer';

const lostodos = Lostodos();


export const AppReducer = () => {

    const [state, dispatch] = useReducer(todoReducer, lostodos);

    const unNuevoState = ( state ) =>  {
        console.log( { state } );
    }
    
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
                    <TodoForm nuevoState={ unNuevoState } />
                </div>
            </div>


        </>
    )
}
