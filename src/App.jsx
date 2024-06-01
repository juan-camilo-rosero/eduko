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
import LoginContainer from './components/LoginContainer'
import { AlertContextProvider } from './context/AlertContext'
import { AuthContextProvider } from './context/AuthContext'
import { ShopContextProvider } from './context/ShopContext'
import { auth } from './firebase/firebase.config'

function App() {

  const {heroSection, setHeroSection, closeAll} = useContext(SectionContext)
  const {setUserEmail, loadUser} = useContext(UserContext)
  const {setBooksId} = useContext(BooksContext)

  window.onbeforeunload = function() { return "Do you want to leave"; }

  useEffect(() => {
    auth.onAuthStateChanged(async user => {
      if (user) {
        setUserEmail(user.email)
        const booksId = await loadUser(user.email)
        setBooksId(booksId)
        setHeroSection(false)
        history.pushState(null, null, window.location.href);
      }
    });
    window.onpopstate = function () {
        history.pushState(null, null, window.location.href);
        closeAll()
    };
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
        <LoginContainer/>

      </ShopContextProvider>
      </AuthContextProvider>
      </AlertContextProvider>
    </>
  )
}

export default App
