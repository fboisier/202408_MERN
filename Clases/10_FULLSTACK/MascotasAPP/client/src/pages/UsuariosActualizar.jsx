import { useNavigate, useParams } from "react-router-dom"
import FormularioUsuarios from "../components/FormularioUsuarios"
import { updateUsuario, getUsuario } from "../api/usuariosServices"
import Swal from "sweetalert2"
import { useEffect, useState } from "react"
import Cargando from "../components/Cargando"

const UsuariosActualizar = () => {

    const { identificador } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const [usuario, setUsuario] = useState(null);

    const navigate = useNavigate();

    useEffect(() => {

        const getInitialData = async () => {
            try {
                const data = await getUsuario(identificador)
                setUsuario(data)
                setIsLoading(false)
            } catch (error) {
                console.error(error)
                Swal.fire({
                    icon: 'error',
                    title: 'Algo salio mal...',
                    text: error?.response?.data?.message,
                })
            }
        }
        getInitialData()

    }, [])


    const handleActualizarUsuario = (values) => {
        const saveData = async () => {
            try {
                await updateUsuario(identificador, values)
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

    if (isLoading) {
        return <Cargando />
    }

    return (
        <>
            <h2>Actualizar Usuario</h2>
            <hr />
            <FormularioUsuarios editando={true} initial={usuario} handleSubmit={handleActualizarUsuario} />
        </>

    )
}

export default UsuariosActualizar