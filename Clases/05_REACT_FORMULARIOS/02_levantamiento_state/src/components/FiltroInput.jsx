import propTypes from 'prop-types'

const FiltroInput = ({ filtro, setFiltro }) => {

    const handleFiltro = (e) => {
        setFiltro(e.target.value)
    }

    return (
        <>
            <div className="mb-3">
                <input type="text" placeholder="Ingresar Filtro" value={filtro} className="form-control" id="tarea" onChange={handleFiltro} />
            </div>
        </>
    )
}

FiltroInput.propTypes = {
    filtro: propTypes.string.isRequired,
    setFiltro: propTypes.func.isRequired
}

export default FiltroInput