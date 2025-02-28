import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'  // Importa estilos desde la misma raíz
import App from './App.jsx'  // Importa el componente App

const root = createRoot(document.getElementById('root'))
root.render(
  <StrictMode>  {/* Relacionado con el modo de desarrollo*/}
    <App />    {/* Componente App */}
  </StrictMode>,
)
