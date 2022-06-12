import React, { useEffect, useState } from 'react'

export const Mensage = () => {

    const [coors, setCoors] = useState({
        x: 0,
        y: 0
    });

    const { x, y } = coors;

    const Movemuose = (e) => {
        const coors = { x: e.x, y: e.y };
        setCoors(coors);
    }
  
  useEffect(() => {

    window.addEventListener('mousemove', Movemuose);

    console.log('Hey, estoy vivo');
  
    return () => {
        window.removeEventListener('mousemove', Movemuose);
      console.log('Me voy');
    } 
  }, [])
  
  
  
    return (
    <div>
        { <p>  Valor de X: { x } Valor de y: { y }</p> }
        <h1> Mensage </h1>
    </div>
  )
}
