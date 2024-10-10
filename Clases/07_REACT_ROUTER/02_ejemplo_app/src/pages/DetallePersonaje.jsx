import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from 'axios'

const DetallePersonaje = () => {

    const { id, tipo } = useParams()
    const [personaje, setPersonaje] = useState({})

    useEffect(() => {
        axios.get(`https://rickandmortyapi.com/api/${tipo}/${id}`)
            .then((response) => {
                setPersonaje(response.data)
            })
    }, [id, tipo])


    return (
        <div className="row">
        <div className="col-md-4">
            <div className="card mb-4">
                <img src={personaje.image} className="card-img-top" alt={personaje.name} />
                <div className="card-body">
                    <h5 className="card-title">{personaje.name} - ({tipo})</h5>
                    <p className="card-text">Status: {personaje.status}</p>
                    <p className="card-text">Species: {personaje.species}</p>
                </div>
            </div>
        </div>
        </div>
    )
}

export default DetallePersonaje