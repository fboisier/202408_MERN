import { useState } from "react";
import CajaInput from "./CajaInput";

const Formulario = () => {

    // ESTADOS
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [edad, setEdad] = useState(0);


    // MANEJADORES
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("NOMBRE:", nombre)
        console.log("APELLIDO:", apellido)
        console.log("EDAD:", edad)
    }

    const handleChange = (e) => {
        console.log(e.target.name, e.target.value)

        // if (e.target.name === "nombre") {
        //     setNombre(e.target.value)
        // } else if (e.target.name === "apellido") {
        //     setApellido(e.target.value)
        // } else if (e.target.name === "edad") {
        //     setEdad(e.target.value)
        // }

        switch (e.target.name) {
            case "nombre":
                setNombre(e.target.value)
                break;
            case "apellido":
                setApellido(e.target.value)
                break;
            case "edad":
                setEdad(e.target.value)
                break;
        }

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

            <button type="submit" className="btn btn-primary">Enviar</button>
        </form>
    )
}

export default Formulario