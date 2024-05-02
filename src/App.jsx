import { useContext, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import {SectionContext} from './context/SectionContext'
import Panel from './components/Panel'
import { BooksContextProvider } from './context/BooksContext'
import { ScoreContextProvider } from './context/ScoreContext'

function App() {
  const {heroSection} = useContext(SectionContext)
  return (
    <>
      <ScoreContextProvider>
        <Header/>
        {(heroSection)
          ? <HeroSection/>
          : <BooksContextProvider>  <Panel/> </BooksContextProvider>
        }
      </ScoreContextProvider>  
    </>
  )
}

export default App
