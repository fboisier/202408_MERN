import ContenedorGris from "./components/ContenedorGris"
import CuadroAmarillo from "./components/CuadroAmarillo"
import CuadroCeleste from "./components/CuadroCeleste"
import CuadroRosado from "./components/CuadroRosado"
import Encabezado from "./components/Encabezado"
import MiTarjeta from "./components/MiTarjeta"
import Usuario from "./components/Usuario"
import ComponenteSC from "./styledComponents/ComponenteSC"

const App = () => {
  return (
    <div className="container">
      
      <Encabezado titulo="Repasando componentes">
          <ul>
              <li>Encabezado 1</li>
              <li>Encabezado 2</li>
              <li>Encabezado 3</li>
          </ul>
      </Encabezado>


      <Usuario />
      <MiTarjeta />
      <Usuario usuario={{ nombre: 'Javier' }}/>



      <hr />
      
      <ContenedorGris>
        <CuadroAmarillo />
        <div className="d-flex my-4">
          <CuadroRosado />
          <CuadroCeleste />
        </div>
      </ContenedorGris>

      <hr />
      <hr />
      <ComponenteSC />


    </div>
  )
}

export default App
