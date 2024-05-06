import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {SectionContextProvider} from './context/SectionContext.jsx'
import {BooksContextProvider} from './context/BooksContext.jsx'
import {UserContextProvider} from './context/UserContext.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SectionContextProvider>
    <BooksContextProvider>
    <UserContextProvider>
      <App/>
    </UserContextProvider>
    </BooksContextProvider>
    </SectionContextProvider>
  </React.StrictMode>,
)
