import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'
import { GitExpertApp } from './GitExpertApp.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GitExpertApp />
  </StrictMode>,
)
