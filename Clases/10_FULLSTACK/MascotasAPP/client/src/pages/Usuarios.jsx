import { useState, useEffect } from 'react'
import { getUsuarios } from '../api/usuariosServices'
import Cargando from '../components/Cargando'
import { Link } from 'react-router-dom'

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
                    </tr>
                </thead>
                <tbody>
                    {usuarios.map(usuario => (
                        <tr key={usuario._id}>
                            <td>{usuario.nombre}</td>
                            <td>{usuario.apellido}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.edad}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Usuarios