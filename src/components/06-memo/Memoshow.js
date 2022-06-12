import React, { memo } from 'react'

export const Memoshow = memo(( {value} ) => {

    console.log('Para que me llamas?');
   
  return (
    <small> { value } </small>
  )
})
