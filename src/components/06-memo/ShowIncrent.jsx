import React, { memo } from 'react'

export const ShowIncrent = memo(( {increment} ) => {

    console.log('Componente ShowIncrent renderizado');
  return (
    <button className='btn btn-primary'
    onClick={ () => {
        increment( 5 );
    } }>
        Increment
    </button>
  )
})
