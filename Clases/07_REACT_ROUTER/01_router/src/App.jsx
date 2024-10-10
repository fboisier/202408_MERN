import { Routes, Route, NavLink } from 'react-router-dom';
import Inicio from './components/Inicio';
import AcercaDe from './components/AcercaDe';
import NotFound from './components/NotFound';
import './App.scss';
import Resultado from './components/Resultado';
import Pancho from './components/Pancho';

const App = () => {
  return (
      <div>
        <ul className="menu">
          <li><NavLink to="/" className="btn btn-primary me-4">Inicio</NavLink></li>
          <li><NavLink to="/acerca" className="btn btn-warning">Acerca de</NavLink></li>
        </ul>


        <h1>INICIO DEL COMPONENTE</h1>
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/acerca" element={<AcercaDe />} />
          <Route path="/pancho/:identificador/algo" element={<Pancho />} />
          <Route path="/resultados" element={<Resultado />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <h1>FIN DEL COMPONENTE</h1>
      </div>
  )
}

export default App