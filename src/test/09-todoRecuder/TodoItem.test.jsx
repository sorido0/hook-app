
import { fireEvent, render, screen } from '@testing-library/react';
import { click } from '@testing-library/user-event/dist/click';
import { TodosItem } from './../../components/08-useReducer/TodosItem';

describe('Pruebas el componente <TodoItem >', () => { 

    const todo = {
        id: 1,
        descripcion: 'Hacer el curso de react',
        done: false
    }

    const handleDeleteTodo = jest.fn();
    const TareaCompletada = jest.fn();

    beforeEach( () => jest.clearAllMocks() );

    test('Como se ve el TodoItem ', () => { 

        render(
            <TodosItem 
                todo={ todo } 
                handleDeleteTodo={ handleDeleteTodo } 
                TareaCompletada={TareaCompletada} 
            />)
        
        const liElement = screen.getByTestId('todo-list');
        const spamElement = screen.getByTestId('todo-item-spam');

        //console.log(liElement.className, spamElement.className);

        expect(liElement.className).toBe('list-group-item justify-content-between d-flex');
        expect(spamElement.className).toBe('aling-self-center ');

        //screen.debug();
     });

     test('Debe de cambiar el done: true', () => { 

        todo.done = true;
        render(
            <TodosItem 
                todo={ todo } 
                handleDeleteTodo={ handleDeleteTodo } 
                TareaCompletada={TareaCompletada} 
            />)

        
        const spamElement = screen.getByTestId('todo-item-spam');
       // console.log(spamElement.className);
        expect(spamElement.className).toBe('aling-self-center text-decoration-line-through');

        //screen.debug();
      });

      test('Que la funcion TareaCompletada se llamada  ', () => { 

        render(
            <TodosItem 
                todo={ todo } 
                handleDeleteTodo={ handleDeleteTodo } 
                TareaCompletada={TareaCompletada} 
            />)

        
        const spamElement = screen.getByTestId('todo-item-spam');
       fireEvent.click( spamElement );
       
        expect( TareaCompletada ).toHaveBeenCalledWith( 1 );

       });

       test('Que la funcion handleDeleteTodo se llamada  ', () => { 

        render(
            <TodosItem 
                todo={ todo } 
                handleDeleteTodo={ handleDeleteTodo } 
                TareaCompletada={TareaCompletada} 
            />)

        
        const bottomElement = screen.getByTestId('todo-item-button');
     
        console.log(bottomElement.className);

        fireEvent.click( bottomElement );
        expect( handleDeleteTodo ).toHaveBeenCalledWith( todo.id );

       });

       
 })