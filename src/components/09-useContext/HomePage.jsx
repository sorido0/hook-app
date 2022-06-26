import React, { useContext } from 'react'
import { UserContext } from './context/UserContetxt';

export const HomePage = () => {
    const { user } = useContext( UserContext );
    return (
        <>
            <h1> Home Page <small> { user?.mane }</small> </h1>
            <hr />
            <pre>
                {JSON.stringify( user?.email, null, 3 )}
            </pre>
        </>
    )
}
