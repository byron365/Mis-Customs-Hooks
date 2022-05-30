import {useState} from 'react';

export const useForm = (initialState = {})=>{
    const [values, setValues] = useState(initialState) 

    const reset = ()=>{
        setValues(initialState);
    }

    const handleInputChange = ({target}) =>{
        setValues({
            ...values,
            [target.name]: target.value
        })
    }

    return [values, handleInputChange, reset ]

    /**
     * Este hook nos permite manejar un formulario en el cual
     * hacemos que cambie su valor, dependiendo del estado inicial,
     * y establecemos los nuevos valores, del input al momento de ejecutar
     * un evento
     */
}