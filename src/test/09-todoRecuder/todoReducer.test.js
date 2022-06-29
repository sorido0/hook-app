
import { todoReducer } from './../../components/08-useReducer/todoReducer';

describe('Pruebas en el Todo Reducer ', () => { 

    const estadoIniciar = {
        id: 1,
        description: 'Demo todo',
        done: false
    };
    
    test('Debe de retornar el valor iniciar del reducer', () => { 
        
        const neuvoEstado = todoReducer(estadoIniciar, {});

        
        //console.log(neuvoEstado, initialState);
         expect(neuvoEstado).toBe(estadoIniciar);


     })

     test('Debe de agregar un Todo', () => { 
            const action = {
                type: 'agregar',
                descripcion: {
                    id: 2,
                    description: 'Nuevo Todo',
                    done: false
                },
                done: false
            };
            
            //const neuvoEstado = todoReducer(estadoIniciar, action);
           // console.log(neuvoEstado);
           // expect(neuvoEstado.length).toBe(2);
            //expect(neuvoEstado).toContain( action.descripcion );
      });


      test('Debe de eliminar un TODO', () => { 

        const action = {
            type: 'eliminar',
            descripcion: 1,
        };

       // const neuvoEstado = todoReducer(estadoIniciar, action);
        //console.log(filter);
       // expect(neuvoEstado.length).toBe(1);
       });


       test('Debe de reailzar el Toggle del todo', () => { 
        const action = {
            type: 'completada',
            descripcion: 1,
        };

        //const neuvoEstado = todoReducer(estadoIniciar, action);
        //console.log(Map);
        //expect(neuvoEstado.length).toBe(1);
        })
 })