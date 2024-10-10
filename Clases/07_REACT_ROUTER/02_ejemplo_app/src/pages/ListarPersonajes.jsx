import { useState, useEffect } from 'react'
import axios from 'axios'
import ModoTarjetas from '../components/ModoTarjetas'
import ModoListado from '../components/ModoListado'

const ListarPersonajes = () => {

    const [personajes, setPersonajes] = useState([])
    const [modoTarjeta, setModoTarjeta] = useState(true)

    useEffect(() => {
        axios.get('https://rickandmortyapi.com/api/character')
            .then((response) => {
                setPersonajes(response.data.results)
            })
    }, [])

    return (
        <div className="container">
            <div className="row">
                {
                    modoTarjeta
                        ? <>
                            <button className="btn btn-primary mb-3 mt-3" onClick={() => setModoTarjeta(false)}>Cambiar a Listado</button>
                            <ModoTarjetas personajes={personajes} />
                        </>
                        : <>
                            <button className="btn btn-primary mb-3 mt-3" onClick={() => setModoTarjeta(true)}>Cambiar a Tarjetas</button>
                            <ModoListado personajes={personajes} />
                        </>
                }
            </div>
        </div>
    )
}

export default ListarPersonajes