import propTypes from 'prop-types'
import FiltroInput from './FiltroInput'
import { useState } from 'react'
import Listado from './Listado'
import Tarjetas from './Tarjetas'


const ListadoTareas = ({tareas}) => {
    const [filtro, setFiltro] = useState('')
    const [modoTarjeta, setModoTarjeta] = useState(false)

    const tareasFiltradas = tareas.filter(tarea => tarea.toLowerCase().includes(filtro.toLowerCase()))

    return (
        <>
            <h2>Listado de Tareas</h2>
            <div className="row">
                <div className="col-7">
                    <FiltroInput filtro={filtro} setFiltro={setFiltro} />
                </div>
                <div className="col-5">
                    <button 
                        onClick={() => setModoTarjeta(!modoTarjeta)}
                        className="btn btn-primary"
                    >
                        {modoTarjeta ? 'Modo Lista' : 'Modo Tarjeta'}
                    </button>
                </div>
            </div>

            { modoTarjeta 
                ? <Tarjetas tareasFiltradas={tareasFiltradas} filtro={filtro} />
                : <Listado tareasFiltradas={tareasFiltradas} filtro={filtro} />
            }
        </>
    )
}

ListadoTareas.propTypes = {
    tareas: propTypes.array.isRequired
}

export default ListadoTareas