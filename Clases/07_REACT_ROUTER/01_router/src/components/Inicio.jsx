import { Link } from "react-router-dom"

const Inicio = () => {
    return (
        <div className="container mt-5">
            <div className="alert alert-info">
                <h2>Inicio</h2>
                <p>Esta es la página de inicio</p>

                <table className="table table-striped table-bordered table-hover table-sm bg-light">
                    <thead className="thead-dark">
                        <tr>
                            <th>ID</th>
                            <th>Nombre</th>
                            <th>Apellido</th>
                            <th>Acción</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.from({ length: 10 }, (_, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>Nombre {index + 1}</td>
                                <td>Apellido {index + 1}</td>
                                <td>
                                    <Link to={`/pancho/${index + 1}/algo`} className="btn btn-sm btn-primary">Editar</Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Inicio