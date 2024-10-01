import { useState } from "react";

const useForm = (initialState) => {

    const [valores, setValores] = useState(initialState);

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        setValores( { ...valores, [e.target.name]: e.target.value } )
    }


    const handleClean = () => {
        setValores(initialState)
    }

    const imprimirConsola = () => {
        console.log("VALORES:", valores)
    }


    // AL SER HOOK NO RETORNA JSX, SOLO VALORES Y FUNCIONES.
    return {
        valores,
        handleChange,
        handleClean,
        imprimirConsola
    }
}

export default useForm