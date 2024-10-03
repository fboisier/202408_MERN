import { useState } from "react"
import Formulario from "./components/Formulario"
import ListadoTareas from "./components/ListadoTareas"
import './App.css'

const App = () => {
  const [tareas, setTareas] = useState([
    'Tarea 1',
    'Tarea 2',
    'Tarea 3',
    'Tarea 4',
  ])

  return (
    <>
      <div className="container mt-2">
        <h1>Levantamiento de Estado</h1>
        <hr />
        <div className="row mt-2">
          <div className="col-6">
            <Formulario tareas={tareas} setTareas={setTareas} />
          </div>
          <div className="col-6">
            <ListadoTareas tareas={tareas} />
          </div>
        </div>
      </div>
    </>
  )
}

export default App