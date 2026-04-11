import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './styles/tokens.css'
import './styles/global.css'
import './styles/marketing.css'
import './styles/pages.css'
import './styles/demo.css'
import './styles/responsive.css'
import './styles/carbon-overrides.css'

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
