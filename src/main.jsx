import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {SectionContextProvider} from './context/SectionContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SectionContextProvider>
      <App/>
    </SectionContextProvider>
  </React.StrictMode>,
)
