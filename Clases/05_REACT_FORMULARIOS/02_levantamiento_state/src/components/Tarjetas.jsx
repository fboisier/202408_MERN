import propTypes from 'prop-types'

const Tarjetas = ({ tareasFiltradas, filtro }) => {
    return (
        <div className="row">
            {
                tareasFiltradas.map((tarea, index) => {

                    const start = tarea.toLowerCase().indexOf(filtro.toLowerCase());
                    const end = start + filtro.length;

                    return (
                        <div className="col-md-4" key={index}>
                            <div className="card mb-4">
                                <div className="card-body">
                                    <h5 className="card-title">
                                        {tarea.substring(0, start)}
                                        <span className="destacar">{tarea.slice(start, end)}</span>
                                        {tarea.substring(end)}
                                    </h5>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
Tarjetas.propTypes = {
    tareasFiltradas: propTypes.array.isRequired,
    filtro: propTypes.string.isRequired
}
export default Tarjetas