import { useState, useEffect } from 'react'
import { deleteUsuario, getUsuarios } from '../api/usuariosServices'
import Cargando from '../components/Cargando'
import { Link } from 'react-router-dom'
import Swal from "sweetalert2"

const Usuarios = () => {

    const [cargando, setCargando] = useState(true)
    const [usuarios, setUsuarios] = useState([])

    useEffect(() => {
        const getData = async () => {
            const data = await getUsuarios()
            setUsuarios(data)
            setCargando(false)
        }
        getData()
    }, [])

    const handleConfirmarEliminar = (id) => {
        Swal.fire({
            title: "estás seguro?",
            text: "Vas a eliminar el registro.",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            confirmButtonText: "Si, Eliminar!",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                handleEliminarUsuarios(id)
            }
        });
    }

    const handleEliminarUsuarios = (id) => {
        const saveData = async () => {
            try {
                await deleteUsuario(id)
                Swal.fire({
                    icon: 'success',
                    title: 'Usuario eliminado',
                    showConfirmButton: false,
                    timer: 1500
                })
                setUsuarios(usuarios.filter(usuario => usuario._id !== id))
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

    if (cargando) {
        return <Cargando />
    }

    return (
        <>
            <h3>Usuarios</h3>
            <Link to="/usuarios/crear" className="btn btn-primary mt-2 mb-2">Crear usuario</Link>
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Email</th>
                        <th>Edad</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario._id}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.apellido}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.edad}</td>
                            <td>
                                <Link className="btn btn-warning" to={`/usuarios/${usuario._id}`}>Editar</Link>
                                <button
                                    className="btn btn-danger ms-3"
                                    onClick={() => {
                                        handleConfirmarEliminar(usuario._id)
                                    }}
                                >Eliminar</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Usuarios