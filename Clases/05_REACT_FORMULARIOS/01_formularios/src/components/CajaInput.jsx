import PropTypes from 'prop-types'

const CajaInput = ({etiqueta, identificador, valor, handleChange, error, tipo = "text"}) => {
    return (
        <div className="mb-3">
            <label htmlFor={identificador} className="form-label">{etiqueta}</label>
            <input type={tipo} className="form-control" id={identificador} name={identificador} value={valor} onChange={handleChange}/>
            <small className="form-text text-danger">{error}</small>
        </div>
    )
}

CajaInput.propTypes = {
    etiqueta: PropTypes.string.isRequired,
    identificador: PropTypes.string.isRequired,
    valor:  PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    handleChange: PropTypes.func.isRequired,
    error: PropTypes.string,
    tipo: PropTypes.string
}

export default CajaInput