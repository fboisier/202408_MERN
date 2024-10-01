import CajaInput from "./CajaInput";
import useForm from "../hooks/useForm";
import Swal from 'sweetalert2'

const FormularioHook = () => {

    // ESTADOS
    const initialState = {
        nombre: "",
        apellido: "",
        edad: 0,
        apodo: ""
    }

    const { valores: persona, handleChange, handleClean} = useForm(initialState)

    const { nombre, apellido, edad, apodo } = persona

    // MANEJADORES
    const handleSubmit = (e) => {
        e.preventDefault()
        
        Swal.fire({
            title: "Enviaste un formulario!",
            text: "Los datos son: " + JSON.stringify(persona),
            icon: "success",
            confirmButtonText: "Genial!!"
        });

        handleClean()
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

export default FormularioHook