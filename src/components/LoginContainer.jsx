import { useContext, useState } from "react"
import { RiCloseCircleLine } from "react-icons/ri";
import { SectionContext } from "../context/SectionContext"
import { AuthContext } from "../context/AuthContext"
import { AlertContext } from "../context/AlertContext"
import { UserContext } from "../context/UserContext"

function LoginContainer() {
  const { setHeroSection, setAlertDiv, loginDiv, setLogin } = useContext(SectionContext)
  const { login } = useContext(AuthContext)
  const { setMessage, setImg } = useContext(AlertContext)
  const { setUserEmail, loadUser } = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const validateLogin = (email, password) => {
    const minPasswordLength = 6
    const maxPasswordLength = 20
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const isEmailValid = emailRegex.test(email)
    const isPasswordValid = password.length >= minPasswordLength && password.length <= maxPasswordLength
    return isEmailValid && isPasswordValid
  }

  const handleLogin = async (email, password) => {
    try {
      await login(email, password)
      setHeroSection(false)
      setLogin(false)
      setUserEmail(email)
      loadUser(email)
    } catch (err) {
      const errMessage = (err.message = "Firebase: Error (auth/invalid-credential).")
      ? "Invalid email or password, try again" 
      : "an error ocurred while signin in: " + err.message;
      setAlertDiv(true)
      setMessage(errMessage)
      setImg("error.gif")
    }
  }
  return (
    <div className={`fixed h-screen bg-black w-full left-0 border-t-4 border-blue-turquoise z-40 flex flex-col items-center pt-32 px-6 gap-8 overflow-y-scroll pb-12 transition-all md:px-16 lg:px-24 lg:pt-28 ${(loginDiv)
        ? "bottom-0"
        : "-bottom-[150vh]"
    }`}>
        <RiCloseCircleLine className="fixed right-6 -mt-0 text-blue-turquoise text-4xl bg-black rounded-full cursor-pointer md:right-14 lg:right-20 lg:-mt-0 lg:text-5xl" onClick={() => setLogin(false)}/>
        <h2 className="text-center w-4/5 md:w-full text-blue-turquoise text-3xl font-semibold md:text-4xl mb-8">Login</h2>
        <input type="email" placeholder="email" className="w-4/5 focus:text-blue-turquoise py-2 bg-transparent border-b-2 border-blue-turquoise text-light outline-none text-xl md:w-1/2 lg:w-1/4" onChange={e => {
          setEmail(e.target.value)
        }} value={email}/>
        <input type="password" placeholder="password" className="w-4/5 focus:text-blue-turquoise py-2 bg-transparent border-b-2 border-blue-turquoise text-light outline-none text-xl md:w-1/2 lg:w-1/4" onChange={e => {
            setPassword(e.target.value)
        }} value={password}/>
        <button className="py-2 w-3/4 text-2xl bg-transparent border-2 border-blue-turquoise neon-turquoise-box rounded-xl font-semibold text-blue-turquoise transition-all lg:text-xl hover:bg-blue-turquoise hover:text-black absolute bottom-16 md:static md:w-1/2 md:mt-8 lg:mt-4 lg:w-1/4" onClick={e => {
            e.preventDefault()
            if(validateLogin(email, password)) handleLogin(email, password)
            else alert("Invalid email or password")
          }}>done</button>
    </div>
  )
}

export default LoginContainer