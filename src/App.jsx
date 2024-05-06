import { useContext, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Alert from './components/Alert'
import {SectionContext} from './context/SectionContext'
import Panel from './components/Panel'
import SignUpContainer from './components/SignUpContainer'
import { BooksContextProvider } from './context/BooksContext'
import { AlertContextProvider } from './context/AlertContext'
import { AuthContextProvider } from './context/AuthContext'
import { UserContextProvider } from './context/UserContext'
import { ShopContextProvider } from './context/ShopContext'
function App() {
  const {heroSection} = useContext(SectionContext)
  return (
    <>
      <AlertContextProvider>
      <AuthContextProvider>
      <BooksContextProvider>
      <UserContextProvider>
      <ShopContextProvider>

        <Header/>
        <Alert/>
        {(heroSection)
          ? <HeroSection/>
          :  <Panel/>
        }
        <SignUpContainer/>

      </ShopContextProvider>
      </UserContextProvider>
      </BooksContextProvider>
      </AuthContextProvider>
      </AlertContextProvider>
    </>
  )
}

export default App
