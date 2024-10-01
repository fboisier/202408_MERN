import { useState } from "react";
import CajaInput from "./CajaInput";

const FormularioObjeto = () => {

    // ESTADOS
    const initialState = {
        nombre: "",
        apellido: "",
        edad: 0,
        apodo: ""
    }

    const [persona, setPersona] = useState(initialState);

    const { nombre, apellido, edad, apodo } = persona

    // MANEJADORES
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("PERSONA:", persona)
    }

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)
        setPersona( { ...persona, [e.target.name]: e.target.value } )
    }

    const handleClean = () => {
        setPersona(initialState)
    }

    // JSX
    return (
        <form onSubmit={handleSubmit}>
            <CajaInput
                etiqueta="Ingresa Nombre"
                identificador="nombre"
                valor={nombre}
                handleChange={handleChange} 
                error=""
            />

            <CajaInput
                etiqueta="Ingresa Apellido"
                identificador="apellido"
                valor={apellido}
                handleChange={handleChange} 
                error=""
            />

            <CajaInput
                etiqueta="Ingresa Edad"
                identificador="edad"
                valor={edad}
                tipo="number"
                handleChange={handleChange} 
                error=""
            />
            <CajaInput
                etiqueta="Ingresa Apodo"
                identificador="apodo"
                valor={apodo}
                handleChange={handleChange} 
                error=""
            />

            <button type="submit" className="btn btn-primary me-2">Enviar</button>
            <button type="button" className="btn btn-secondary" onClick={handleClean}>Limpiar</button>
        </form>
    )
}

export default FormularioObjeto