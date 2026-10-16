import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

//Módulos
import Introducao from './Introducao.jsx'
import Skills from './Skills.jsx'
import Resultado from './Resultado.jsx'
import Experiencia from './Experiencia.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Introducao />
    <Skills />
    <Experiencia />
    <Resultado />
  </StrictMode>,
)
