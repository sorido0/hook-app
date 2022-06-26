import React, { useState } from 'react'
import { UserContext } from './UserContetxt';


// const user = {
//     name: 'Angel Soriano',
//     email: 'sorido0@gmail.com',
//     contrasena: '1234567',
// }

export const UserProvider = ({ children }) => {

    const [user, setUser] = useState();
  return (
    <UserContext.Provider value={ { user, setUser  } }>
        { children }
    </UserContext.Provider>
  )
}
