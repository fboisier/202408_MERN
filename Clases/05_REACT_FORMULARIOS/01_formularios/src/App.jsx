import Contador from "./components/Contador"
import Formulario from "./components/Formulario"
import FormularioHook from "./components/FormularioHook"
import FormularioObjeto from "./components/FormularioObjeto"
import FormularioFormik from "./components/FormularioFormik"
import Mapeadores from "./components/Mapeadores"

const App = () => {

  const nombre = "Francisco"

  return (
    <div className="container">
      <h1>MAP</h1>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <Mapeadores />
        </div>
      </div>


      <h1 className="mt-5">Formularios</h1>
      <hr />
      <div className="row">
        <div className="col-md-6">
          <Formulario />
        </div>
        <div className="col-md-6">
          <FormularioObjeto />
        </div>
        <div className="col-md-6">
          <FormularioHook />
        </div>
        <div className="col-md-6">
          <FormularioFormik />
        </div>
      </div>

      <h1 className="mt-5">Componentes</h1>
      <hr />
      <div className="row">
        <div className="col">
          <Contador inicial={10} color="red" />
        </div>
        <div className="col">
          <Contador />
        </div>
        <div className="col">
          <Contador color="green" />
        </div>
        <div className="col">
          <Contador color="green" inicial={100} incrementador={5} condicion={120} />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <Contador inicial={10} color="red">
            <p>Este es el contador Especial</p>
          </Contador>
        </div>
        <div className="col">
          <Contador>
            <p onClick={() => console.log("Le hiciste clic al parrafo")}>Este es el contador Vacio {nombre}</p>
          </Contador>
        </div>
      </div>
    </div>
  )
}

export default App