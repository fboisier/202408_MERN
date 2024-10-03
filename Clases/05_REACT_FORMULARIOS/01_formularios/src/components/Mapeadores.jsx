import { useState } from "react";

const Mapeadores = () => {

    const comestibles = ['Manzanas', 'Plátanos', 'Naranjas'];

    const [tareas] = useState([
        { id: 1, texto: 'Hacer la compra', importante: true },
        { id: 2, texto: 'Limpiar la casa', importante: false },
        { id: 3, texto: 'Hacer ejercicio', importante: true }
    ]);

    const [tareasFiltradas, setTareasFiltradas] = useState(tareas);

    const handleClickFiltrar = () => {
        setTareasFiltradas(tareas.filter(tarea => tarea.importante))
    }

    const handleClickReset = () => {
        setTareasFiltradas(tareas)
    }

    return (
        <>
            <ul>
                {
                    comestibles.map((comestible, index) => (
                        <li key={index}>{comestible}</li>
                    ))
                }
            </ul>

            <table className="table table-bordered table-striped table-hover">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tarea Importante</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        tareasFiltradas.map((tarea, index) => (
                            <tr key={index}>
                                <td>{tarea.id}</td>
                                <td>{tarea.texto}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            <button className="btn btn-primary me-3" onClick={handleClickFiltrar} >Filtrar!!!</button>
            <button className="btn btn-secondary" onClick={handleClickReset} >Reset!!!</button>
        </>
    )
}

export default Mapeadores