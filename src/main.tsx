import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Routing from './Routes'
import './index.scss'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Routing />
  </StrictMode>,
)
