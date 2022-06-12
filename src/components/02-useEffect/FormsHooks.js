import React from 'react'
import '../02-useEffect/useEfecct.css';
import { useForms } from './../../hooks/useForms';

export const FormsHooks = () => {

    const [formulaio, handleInput] = useForms({
        name: '',
        email: '', 
        password: ''
    });

   const { name, email, password } = formulaio;

   const handlenChange = (e) => {
        e.preventDefault();
        console.log(formulaio);  
    }

  return (
      
    <form className='form' onSubmit={ handlenChange }>
        
        <h1> Forms Hooks </h1>
        <hr />

        <div className='form-group'> 

            <input 
            type='text'
            className='form-control mb-2'
            placeholder='Nombre'
            name='name'
            autoCapitalize='off'
            value={ name }
            onChange={ handleInput }
            ></input>
        </div>
        <div className='form-group'>
            <input 
            type='text'
            className='form-control mb-2'
            placeholder='usuario@???.com'
            name='email'
            autoCapitalize='off'
            value={ email }
            onChange={ handleInput }
            ></input>
        </div>
            
        <div className='form-group'>
            <input 
            type='password'
            className='form-control mb-2'
            placeholder='*********'
            name='password'
            value={ password }
            onChange={ handleInput }
            ></input> 
        </div>

        <button type='submit' className='btn btn-primary' > Guardar </button>
               
    </form>
  )
}
