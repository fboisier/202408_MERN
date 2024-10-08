import { useContext } from 'react'
import { UsuarioContext } from '../../contexts/UsuarioContext'
import Ejemplo3 from './Ejemplo3'

const Ejemplo2 = () => {

    const {usuario} = useContext(UsuarioContext)

    return (
        <div>
            <h3>El usuario es: {usuario.nombre}</h3>
            <Ejemplo3 />
        </div>
    )
}

export default Ejemplo2