import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Swal from 'sweetalert2';
import Card from "./components/Card";
import Problema1 from "./components/Problema1";
import { DataContext } from "./contexts/DataContext";
import { UsuarioContext } from "./contexts/UsuarioContext";

const App = () => {
  
  const [loading, setLoading] = useState(true)
  const {datos, setDatos} = useContext(DataContext)
  const {setUsuario} = useContext(UsuarioContext)
  
  const getDatos = async () => {
    try {
      const response = await axios.get('https://api.giphy.com/v1/gifs/search?api_key=9D2YYrH9qQQZVDSjqWhFtYRAVhxvmdyB&q=goku&limit=10&offset=0&rating=g&lang=es&bundle=clips_grid_picker')
      setDatos(response.data.data)
      setLoading(false)
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo salió mal!: ' + error.message,
      })
      console.log(error.message)
    }
  }

  useEffect(()=>{
    getDatos()
    setUsuario({
      nombre: 'Juan',
      apellido: 'Perez',
      edad: 30
    })
  }, [])

  if(loading){
    return (
      <div className="container mt-4">
        <h1>Cargando...</h1>
      </div>
    )
  }

  return (
    <div className="container mt-4">

      
      <Problema1>
        <h1>ESTO ES PARTE DE CHILDREN</h1>
      </Problema1>


      <h1>API React</h1>
        <div className="row">
        {datos.map((item, index) => (
          <div key={index} className="col-3">
            <Card titulo={item.title} imagen={item.images.fixed_width.url}>{item.title}</Card>
          </div>
        ))}
        </div>
    </div>
  )
}

export default App