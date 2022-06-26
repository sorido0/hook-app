
import { useForms } from './../../hooks/useForms';
import { renderHook } from '@testing-library/react';
describe('Test en useForms ', () => { 

    const { result } =  renderHook( () => useForms({ nombre: '', apellido: '', email: '', password: '' }));
    console.log(result);

    test('Debe retornar los valores por defectos ', () => {
        const { nombre, email, password } = result.current;
        expect(nombre).toBe('');
        expect(email).toBe('');
        expect(password).toBe('');
    });

    test('', () => { second })

 })