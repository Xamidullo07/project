import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Prodactis from './components/Prodactis/prodactis'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Prodactis />
  </StrictMode>,
)
