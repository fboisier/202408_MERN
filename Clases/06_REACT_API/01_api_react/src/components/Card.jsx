import PropTypes from 'prop-types'

const Card = ({ titulo, children, imagen }) => {

    return (
        <div className="card" style={{ width: '18rem' }}>
            <img src={imagen} className="card-img-top" alt={titulo} />
            <div className="card-body">
                <h5 className="card-title">{titulo}</h5>
                <p className="card-text">
                    {children}
                </p>
            </div>
        </div>
    )
}

Card.propTypes = {
    titulo: PropTypes.string.isRequired,
    children: PropTypes.node,
    imagen: PropTypes.string.isRequired,
}

export default Card