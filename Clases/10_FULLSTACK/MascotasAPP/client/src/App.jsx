import Menu from "./pages/Menu"
import { Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import NotFound from "./pages/NotFound"
import Usuarios from "./pages/Usuarios"
import UsuariosCrear from "./pages/UsuariosCrear"

const App = () => {

  return (
    <>
      <Menu />
      <div className="container mt-4">
        
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/usuarios" element={<Usuarios />} />
          <Route path="/usuarios/crear" element={<UsuariosCrear />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </div>
    </>
  )
}

export default App