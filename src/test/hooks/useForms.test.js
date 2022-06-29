
import { useForms } from './../../hooks/useForms';
import { renderHook } from '@testing-library/react';
import { act } from 'react-dom/test-utils';

const estadoIniciar = {
    nombre: 'sorido0', password: '123456'
}

const { result } = renderHook(() => useForms(estadoIniciar));
const {  setForms, handleInput, formsRecet } = result.current;

describe('Test en useForms ', () => {

   // console.log(result);

    test('Debe retornar los valores por defectos ', () => {
        const { nombre, password } = result.current;
        expect(nombre).toBe('sorido0');
        expect(password).toBe('123456');
    });

    test('Provando si son funciones', () => {

        expect(typeof handleInput).toBe('function');
        expect(typeof formsRecet).toBe('function');
    });

    test('Como esta formado el estado iniciar', () => {

        expect(result.current).toEqual(
            {
                nombre: estadoIniciar.nombre,
                password: estadoIniciar.password,
                Forms: estadoIniciar,
                handleInput: expect.any(Function),
                formsRecet: expect.any(Function)
            }
        );
    });

    test('Debe de cambiar el nombre del formulario ', () => {

        const newValue = 'sorido';
        const { result } = renderHook(() => useForms(estadoIniciar));
        const {  handleInput } = result.current;
      

        act(() => {
            handleInput({ target: {
                name: 'name',
                value: newValue,
            }})
        });

        //===================================console.log(result.current.name, newValue);
        expect(result.current.name).toEqual(newValue);
        expect(result.current.Forms.name).toEqual(newValue);

     })

     test('Debe mostar el estado iniciar ', () => { 

        const newValue = 'sorido';
        const { result } = renderHook(() => useForms(estadoIniciar));
        const {  handleInput } = result.current;
        
        act(() => {
            handleInput({ target: {
                name: 'name',
                value: newValue,
            }})

            formsRecet();
        });

        expect(result.current.nombre).toEqual(estadoIniciar.nombre);
        expect(result.current.Forms.nombre).toEqual(estadoIniciar.nombre);
      })

});