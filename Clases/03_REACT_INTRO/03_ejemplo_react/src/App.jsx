
import './App.css'
import Container from './components/Container';
import Tarjeta from './components/Tarjeta';

const App = () => {
  const nombre = 'Juan Pérez';
  const edad = 30;
  const usuario = {
    nombreUsuario: 'juanperez',
    correo: 'juan@ejemplo.com'
  };

  const {nombreUsuario, correo} = usuario;

  const pasatiempos = ['Leer', 'Jugar videojuegos', 'Senderismo', 'Programación'];

  return (
    <Container opcion="cualquier">
      <p>{nombre}</p>
      <p>{edad}</p>
      <p>{nombreUsuario}</p>
      <p>{correo}</p>
      {pasatiempos.map((pasatiempo, indice) => (
        <Tarjeta 
          key={indice} 
          titulo={pasatiempo}
          subtitulo={nombre}
          correo={correo}
        >
          <h6>HOLA MUNDO</h6>
        </Tarjeta>
      ))}
    </Container>
  );
};

export default App;