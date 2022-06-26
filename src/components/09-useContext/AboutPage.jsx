import React, { useContext } from 'react'
import { UserContext } from './context/UserContetxt';

export const AboutPage = () => {
  const { user } = useContext( UserContext );
  return (
    <> 
        <h1>About Page</h1>
        <hr />
        <pre>
          {JSON.stringify( user?.name, null, 3 )}
        </pre>
    </>
  )
}
