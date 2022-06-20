import { useState } from "react";


export const useForms = (valoresIniciales = {} ) => {
 
    const [Forms, setForms] = useState(valoresIniciales);


    const handleInput = (e) => {
        setForms({
            ...Forms,
            [e.target.name]: e.target.value
        })
    }

    const formsRecet = () => {
        setForms(valoresIniciales)
    }

    return { ...Forms, setForms, handleInput, formsRecet };

}
