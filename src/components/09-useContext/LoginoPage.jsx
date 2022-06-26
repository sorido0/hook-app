import React, { useContext, useEffect } from 'react'
import { UserContext } from './context/UserContetxt';

export const LoginoPage = () => {

  const { user, setUser } = useContext( UserContext );

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
  }, [user])
  

  return (
    <>
      <h1>Login Page</h1>
      <hr />
      <pre>
        {JSON.stringify( user, null, 3 )}
      </pre>


      <button 
      className='btn btn-primary'
      onClick={() => setUser(
          { 
            name: 'Angel Soriano', 
            email: 'sorido0Gmail.com', 
            contrasena: '1234567' 
          },

        )}
      >
        Crear Usuario
      </button>
    </>
  )
}
