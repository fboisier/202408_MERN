import { useNavigate } from "react-router-dom"
import FormularioUsuarios from "../components/FormularioUsuarios"
import { createUsuario } from "../api/usuariosServices"
import Swal from "sweetalert2"

const UsuariosCrear = () => {

    const navigate = useNavigate();

    const initialValues = {
        nombre: "",
        apellido: "",
        edad: "",
        email: "",
        password: "",
    }

    const handleCrearUsuario = (values) => {
        const saveData = async () => {
            try {
                await createUsuario(values)
                navigate('/usuarios')
            } catch (error) {
                console.error(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Algo salio mal...',
                    text: error?.response?.data?.message,
                })
            }
        }
        saveData();
    }

    return (
        <>
            <h2>Crear Usuario</h2>
            <hr />
            <FormularioUsuarios initial={initialValues} handleSubmit={handleCrearUsuario} />
        </>

    )
}

export default UsuariosCrear