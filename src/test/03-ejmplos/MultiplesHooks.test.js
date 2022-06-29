
import { MulplesHooks } from './../../components/03-ejemplos/MulplesHooks';
import { render, screen, mockReturnValue } from '@testing-library/react';
import { useFetch } from './../../hooks/useFetch';


//jest.mock('./../../hooks/useFetch');

describe('Pruebas en el componente Ejemplos ', () => { 


    render( <MulplesHooks />);

    test('Como esta formado el MulplesHooks', () => { 

         //screen.debug();

          // useFetch.mockReturnValue({
          //      data: null, 
          //      loading: true, 
          //      error: null
          // });

        expect(screen.getByText('breaking badapi Quotes',  'Loadig...'));

        const hayBotones = screen.getAllByRole('button', { name: 'next quote' });

        expect(hayBotones).toBeTruthy();
     });

     test('Dede de mostrar un Qoute ', () => { 

         //screen.debug();

          // useFetch({
          //      data: [{ author: 'sorido0', quote: 'Hola, soy Goku' }], 
          //      loading: false, 
          //      error: null
          // });
          
          
          //screen.debug();
        
      })


 })