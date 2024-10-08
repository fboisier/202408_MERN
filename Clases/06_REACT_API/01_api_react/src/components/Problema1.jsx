import PropTypes from 'prop-types'
import Ejemplo1 from './ejemplos/Ejemplo1'

const Problema1 = ({children}) => {
    return (
        <div>
            {children}
            <hr />
            <Ejemplo1 />
        </div>
    )
}

Problema1.propTypes = {
    children: PropTypes.node
}

export default Problema1