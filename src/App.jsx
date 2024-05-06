import { useContext, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Alert from './components/Alert'
import {SectionContext} from './context/SectionContext'
import {UserContext} from './context/UserContext'
import {BooksContext} from './context/BooksContext'
import Panel from './components/Panel'
import SignUpContainer from './components/SignUpContainer'
import { AlertContextProvider } from './context/AlertContext'
import { AuthContextProvider } from './context/AuthContext'
import { ShopContextProvider } from './context/ShopContext'
import { auth } from './firebase/firebase.config'

function App() {

  const {heroSection, setHeroSection} = useContext(SectionContext)
  const {setUserEmail, loadUser} = useContext(UserContext)
  const {setBooksId} = useContext(BooksContext)

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        setUserEmail(user.email)
        const booksId = await loadUser(user.email)
        setBooksId(booksId)
        setHeroSection(false)
      }
    });
  }, [])


  return (
    <>
      <AlertContextProvider>
      <AuthContextProvider>
      <ShopContextProvider>

        <Header/>
        <Alert/>
        {(heroSection)
          ? <HeroSection/>
          :  <Panel/>
        }
        <SignUpContainer/>

      </ShopContextProvider>
      </AuthContextProvider>
      </AlertContextProvider>
    </>
  )
}

export default App
