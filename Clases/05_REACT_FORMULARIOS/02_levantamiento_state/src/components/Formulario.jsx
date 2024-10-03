import { useState } from "react"
import propTypes from 'prop-types'
import Swal from 'sweetalert2'

const Formulario = (props) => {
    
    const { tareas, setTareas } = props

    const [texto, setTexto] = useState('')
    const [error, setError] = useState('')

    const handleChange = (e) => {
        setTexto(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        
        if (texto.trim() === '') {
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'El campo no puede estar vacío'
            })
            setError('El campo no puede estar vacío')
            return
        }
        setError('')

        setTareas([...tareas, texto])
        setTexto('')
    }

    return (
        <>
            <h2>Formulario</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="tarea" className="form-label">Ingresar Tarea</label>
                    <input type="text" value={texto} className="form-control" id="tarea" onChange={handleChange} />
                    <small className="form-text text-danger">{error}</small>
                </div>

                <button type="submit" className="btn btn-primary">Agregar Tarea</button>
            </form>
        </>
    )

}

Formulario.propTypes = {
    tareas: propTypes.array.isRequired,
    setTareas: propTypes.func.isRequired
}

export default Formulario