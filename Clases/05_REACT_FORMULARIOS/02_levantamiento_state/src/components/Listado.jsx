import propTypes from 'prop-types'


const Listado = ({tareasFiltradas, filtro}) => {
    return (
        <ul className="list-group">
        {
            tareasFiltradas.map((tarea, index) => {

                const start = tarea.toLowerCase().indexOf(filtro.toLowerCase());
                const end = start + filtro.length; 
            
                return (
                    <li key={index} className="list-group-item">
                        {tarea.substring(0, start)}
                        <span className="destacar">{tarea.slice(start, end)}</span>
                        {tarea.substring(end)}
                    </li>
                )
            })
        }
    </ul>
    )
}

Listado.propTypes = {
    tareasFiltradas: propTypes.array.isRequired,
    filtro: propTypes.string.isRequired
}

export default Listado