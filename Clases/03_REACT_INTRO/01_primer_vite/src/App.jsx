import './App.css'
import Saludar from './components/Saludar'

function App() {

  const nombre = "Francisco"

  return (
    <>
      <Saludar nombre={nombre} apellido="Boisier" />
      <Saludar nombre="Pancho" apellido="" />
      <Saludar nombre="Javier" apellido="Sandoval" />
    </>
  )
}

export default App
