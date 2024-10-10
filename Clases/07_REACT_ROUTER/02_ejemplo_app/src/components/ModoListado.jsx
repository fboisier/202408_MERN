import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ModoListado = ({personajes}) => {
    return (
        <>
            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Estado</th>
                        <th>Especie</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {personajes.map(personaje => (
                        <tr key={personaje.id}>
                            <td>{personaje.name}</td>
                            <td>{personaje.status}</td>
                            <td>{personaje.species}</td>
                            <td>
                                <Link to={`/personaje/${personaje.id}/character`} className="btn btn-primary">Ver Detalles</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table></>
    )
}

ModoListado.propTypes = {
    personajes: PropTypes.array.isRequired
}

export default ModoListado