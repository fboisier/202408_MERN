import PropTypes from 'prop-types';

const Encabezado = (props) => {
    const { titulo, children } = props
    return (
        <>
            <h1 className="mt-3">{titulo}</h1>
            <hr />
            {children}
            <hr />
            
        </>
    )
}

Encabezado.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Encabezado