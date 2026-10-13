import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Introducao from './Introducao.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Introducao />
  </StrictMode>,
)
