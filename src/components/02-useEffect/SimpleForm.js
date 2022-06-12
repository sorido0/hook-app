import React, { useEffect, useState } from 'react'
import '../02-useEffect/useEfecct.css';
import { Mensage } from './Mensage';

export const SimpleForm = () => {

    const [Forms, setForms] = useState({
        name: '',
        email: '', 
        password: ''
    });

    const { name, email } = Forms;

    useEffect( () => {
        console.log('Hey, estoy vivo');
    }, [email])

    const handleInput = (e) => {
        setForms({
            ...Forms,
            [e.target.name]: e.target.value
        })
    }


  return (
    <>
        <h1> Simple Form  con useEffect </h1>

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

        { (name === '123') &&  <Mensage />}
    </>
  )
}
