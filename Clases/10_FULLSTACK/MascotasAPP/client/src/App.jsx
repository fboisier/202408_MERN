import Menu from "./pages/Menu"
import { Routes, Route } from "react-router-dom"
import Inicio from "./pages/Inicio"
import NotFound from "./pages/NotFound"
import Usuarios from "./pages/Usuarios"
import UsuariosCrear from "./pages/UsuariosCrear"
import UsuariosActualizar from "./pages/UsuariosActualizar"
import Login from "./pages/Login"
import PublicRoutes from "./components/PublicRoutes"
import PrivateRoutes from "./components/PrivateRoutes"

const App = () => {

  return (
    <>
      <Menu />
      <div className="container mt-4">

        <Routes>
          <Route path="/" element={
            <PrivateRoutes>
              <Inicio />
            </PrivateRoutes>
          }/>
          <Route path="/login" element={
            <PublicRoutes>
              <Login />
            </PublicRoutes>
          } />
          <Route path="/usuarios" element={
            <PrivateRoutes>
              <Usuarios />
            </PrivateRoutes>
          } />
          <Route path="/usuarios/crear" element={
            <PrivateRoutes>
              <UsuariosCrear />
            </PrivateRoutes>
          } />
          <Route path="/usuarios/:identificador" element={
            <PrivateRoutes>
              <UsuariosActualizar />
            </PrivateRoutes>
          } />
          
          <Route path="*" element={<NotFound />} />
        </Routes>

      </div>
    </>
  )
}

export default App