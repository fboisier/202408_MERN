import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const ModoTarjetas = ({ personajes }) => {
    return (
        <>
            {personajes.map(personaje => (
                <div className="col-md-4" key={personaje.id}>
                    <div className="card mb-4">
                        <img src={personaje.image} className="card-img-top" alt={personaje.name} />
                        <div className="card-body">
                            <h5 className="card-title"><Link to={`/personaje/${personaje.id}/character`}>{personaje.name}</Link></h5>
                            <p className="card-text">Status: {personaje.status}</p>
                            <p className="card-text">Species: {personaje.species}</p>
                        </div>
                    </div>
                </div>
            ))}
        </>
    )
}

ModoTarjetas.propTypes = {
    personajes: PropTypes.array.isRequired
}

export default ModoTarjetas