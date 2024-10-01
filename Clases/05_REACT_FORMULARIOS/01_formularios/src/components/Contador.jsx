import PropTypes from 'prop-types'
import { useState } from 'react'
import './Contador.css'

const Contador = ({inicial = 0, color ="green", condicion = 12, incrementador = 1, children}) => {

    // States de React VARIABLES
    const [ contador, setContador ] = useState(inicial)

    // Manejadores Handlers de eventos
    const handleClickContador = () => {
        setContador(contador + incrementador)
    }

    // JSX
    return (
        <div className={`tarjeta  ${contador > condicion ? "yellow" : color}`} onClick={handleClickContador}>
            <h3>Contador {contador}</h3>
            {children}
        </div>
    )
}

Contador.propTypes = {
    inicial: PropTypes.number,
    color: PropTypes.string,
    condicion: PropTypes.number,
    incrementador: PropTypes.number,
    children: PropTypes.node
}

export default Contador