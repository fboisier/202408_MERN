import { useState } from 'react';
import './App.css'

const App = ({contador = 1000}) => {

  const [clicks, setClicks] = useState(contador);
  const [texto, setTexto] = useState("PANCHO");


  const manejarClick = () => {
    console.log("Antes de actualizar el estado clicks:", clicks); // Registro del estado actual antes de actualizarlo

    setClicks(clicks + 1)
    setClicks((clicks) => clicks + 1)
    setClicks((clicks) => clicks + 1)
    setClicks((clicks) => clicks + 1)
    setClicks((clicks) => clicks + 1)
    setClicks((clicks) => clicks + 1)

    console.log("Despues de actualizar el estado clicks:", clicks); // Registro del estado actual antes de actualizarlo

    setTexto(texto + " A");
  };

  const manejarEnfoque = (evento) => {
    console.log(evento)
  };


  const manejarClickTexto = () => {
    console.log("Antes de actualizar el estado:", texto); // Registro del estado actual antes de actualizarlo

    setTexto(() => ""); // Actualización asíncrona del estado para limpiar el campo de entrada

    console.log("Después de actualizar el estado:", texto); // Registro del estado inmediatamente después de actualizarlo
  };

  return (
    <>
      <div className="container">
        <h1 onClick={manejarClick}>Evento 1</h1>
        <h1 onClick={(e) => {alert("Click: " + e.target.innerText)}}>Esto es un texto</h1>

        <input onFocus={manejarEnfoque} placeholder="Haz clic aquí..." />

        <p>Clicks: {clicks == 0 ? "Agotado" : clicks}</p>
        <hr />
        <p>Texto: {texto}</p>
        <button disabled={clicks === 0} onClick={manejarClickTexto}>Click</button>
      </div>
    </>
  )
}
export default App