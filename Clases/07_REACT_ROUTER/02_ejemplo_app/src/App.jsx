import './App.scss'
import Menu from './components/Menu'
import { Routes, Route } from 'react-router-dom'
import ListarPersonajes from './pages/ListarPersonajes'
import AcercaDe from './pages/AcercaDe'
import NotFound from './pages/NotFound'
import DetallePersonaje from './pages/DetallePersonaje'

const App = () => {
  return (
    <>
      <Menu />
      <div className="container">
        <h1>Bienvenido al sitio de Pruebas</h1>
        <Routes>
          <Route path="/" element={<ListarPersonajes />} />
          <Route path="/personaje/:id/:tipo" element={<DetallePersonaje />} />
          <Route path="/acerca" element={<AcercaDe />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  )
}

export default App