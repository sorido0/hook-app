import React from 'react'
import { useFetch, useContador } from '../../hooks';


export const Quote = ({ author, quote }) => {

  return (
    <>
          <blockquote className='text-end '>
          <p className='m-4'> { quote }  </p>
          <footer className='blockquote-footer '> { author } </footer>
          </blockquote>
    </>
  )
}
