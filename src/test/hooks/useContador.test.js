import { renderHook } from "@testing-library/react"
import { act } from "react-dom/test-utils";
import { useContador } from './../../hooks/useContador';


describe('Pruebas en el contador', () => {

    // Com renderHook() logramos renderizar el componente y obtener el hook
    const resultado = renderHook(() => useContador());


    test('Debe retonar los valores por defectos ', () => {
        
        // Desectruturamos los valores del hook
        const { contador, Sumar, Restar, Reiniciar } = resultado.result.current;

        // con esto podemos ver los valores por defecto
        //console.log(resultado.result.current);

        console.log(contador);
        // Debe retornar el valor por defecto
        expect(contador).toBe(10);
        // Debe retornar validar que Sumar sea una Funcion con el expect.any() para validar que sea una funcion
        expect(Sumar).toEqual(expect.any(Function));
        console.log(Sumar);
        // Debe retornar validar que Sumar sea una Funcion con el expect.any() para validar que sea una funcion
        expect(Restar).toEqual(expect.any(Function));
        // Debe retornar validar que Sumar sea una Funcion con el expect.any() para validar que sea una funcion
        expect(Reiniciar).toEqual(expect.any(Function));
    })

    test('Si el valor de contador es 100', () => {

        const { result } = renderHook(() => useContador(100));

        // Validamos el valor iniciar del hoock 
        expect(result.current.contador).toBe(100);
    })

    test('Mis test  Funcionan las funciones. ', () => {

        const { result } = renderHook(() => useContador(100));
        const { Sumar, Restar, Reiniciar } = result.current;

        // act( esta recibe un coba () => { ?? }) es una funcion que permite ejecutar una funcion sin necesidad de renderizar el componente
        
        act(() => {
            Sumar();
        });
        // Tomo el valor del contado del setCountor. con 'result.current.contador'
        expect(result.current.contador).toBe(101);

        // Probamos la funcion Restar 
        act(() => {
            Restar();
        });
        expect(result.current.contador).toBe(99);
        
        // Probamos la funcion Reiniciar, pero antes ejutamos la funcion Sumar. 
        act(() => {
            Sumar();
            Reiniciar();
        });

        // Antes de hacer el test debe validar que el valor del contador que sea el valor inicial 
        console.log(result.current.contador);
        expect(result.current.contador).toBe(100);

    })
})