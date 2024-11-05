import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';


import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import { UsuarioContextComponent } from './contexts/UsuarioContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsuarioContextComponent>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UsuarioContextComponent>
  </StrictMode>,
)