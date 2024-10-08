import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import {DataContextComponent} from './contexts/DataContext.jsx'
import { UsuarioContextComponent } from './contexts/UsuarioContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <DataContextComponent>
      <UsuarioContextComponent>
        <App />
      </UsuarioContextComponent>
    </DataContextComponent>
  </StrictMode>,
)
