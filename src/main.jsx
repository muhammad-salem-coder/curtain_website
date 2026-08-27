import { StrictMode } from 'react'
import { hydrateRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// hydrateRoot, not createRoot: scripts/prerender.mjs has already written this
// page's markup into #root, and createRoot would throw it away and repaint.
hydrateRoot(
  document.getElementById('root'),
  <StrictMode>
    <App />
  </StrictMode>,
)
