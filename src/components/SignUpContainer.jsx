import { useContext, useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { SectionContext } from "../context/SectionContext";
import { AuthContext } from "../context/AuthContext";
import { AlertContext } from "../context/AlertContext";
import { UserContext } from "../context/UserContext";

const imgBBApiKey = import.meta.env.VITE_IMGBB_API_URL

function SignUpContainer() {
  const {signUp, setSignUp, setAlertDiv, setHeroSection } = useContext(SectionContext)
  const {setMessage, setImg} = useContext(AlertContext)
  const {register} = useContext(AuthContext)
  const { setUserEmail, createUser } = useContext(UserContext)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const [userImg, setUserImg] = useState("profile.webp")

  const handleSignUp = async e => {
    try {
        const res = await register(email, password)
        setUserEmail(email)
        setSignUp(false)
        setHeroSection(false)
        await createUser(email, username, userImg)
    } catch (err) {
        setAlertDiv(true)
        setMessage("an error ocurred while creating your account: " + err.message)
        setImg("error.gif")
    }
  }

  const handleUploadImg = async image => {
    const formData = new FormData();
    formData.append('image', image);
  
    try {
        const response = await fetch(imgBBApiKey, {
          method: 'POST',
          body: formData
        });
    
        if (response.ok) {
          const data = await response.json();
          const imageUrl = data.data.url;
          setImg(imageUrl)
          setUserImg(imageUrl)
          return imageUrl;
        } else {
          console.error('Error al subir la imagen:', response.statusText);
          return null;
        }
    } catch (error) {
        console.error('Error de red:', error);
        return null;
    }
  }
    
  return (
    <div className={`fixed h-screen bg-black/90 backdrop-blur-2xl w-full left-0 border-t-4 border-blue-turquoise z-40 flex flex-col items-center pt-32 px-6 gap-8 overflow-y-scroll pb-12 transition-all md:px-16 lg:px-24 lg:pt-28 ${(signUp)
        ? "bottom-0"
        : "-bottom-[150vh]"
    }`}>
        <RiCloseCircleLine className="fixed right-6 -mt-0 text-blue-turquoise text-4xl bg-black rounded-full cursor-pointer md:right-14 lg:right-20 lg:-mt-0 lg:text-5xl" onClick={() => setSignUp(false)}/>
        <h2 className="text-center w-4/5 md:w-full text-blue-turquoise text-3xl font-semibold md:text-4xl mb-8">Sign up</h2>
        <input type="text" placeholder="username" className="w-4/5 focus:text-blue-turquoise py-2 bg-transparent border-b-2 border-blue-turquoise text-light outline-none text-xl md:w-1/2 lg:w-1/4" onChange={e => {
            setUsername(e.target.value)
        }}/>
        <input type="email" placeholder="email" className="w-4/5 focus:text-blue-turquoise py-2 bg-transparent border-b-2 border-blue-turquoise text-light outline-none text-xl md:w-1/2 lg:w-1/4" onChange={e => {
            setEmail(e.target.value)
        }}/>
        <input type="password" placeholder="password" className="w-4/5 focus:text-blue-turquoise py-2 bg-transparent border-b-2 border-blue-turquoise text-light outline-none text-xl md:w-1/2 lg:w-1/4" onChange={e => {
            setPassword(e.target.value)
        }}/>
        <span className="text-light text-left w-4/5 md:w-1/2 lg:w-1/4 text-xl">Profile photo:</span>
        <input type="file" placeholder="profile photo url (optional)" className="w-4/5 focus:text-blue-turquoise -mt-6 py-2 bg-transparent border-b-2 border-blue-turquoise text-light outline-none text-xl md:w-1/2 lg:w-1/4" onChange={e => handleUploadImg(e.target.files[0])}/>
        <button className="py-2 w-3/4 text-2xl bg-transparent border-2 border-blue-turquoise neon-turquoise-box rounded-xl font-semibold text-blue-turquoise transition-all lg:text-xl hover:bg-blue-turquoise hover:text-black absolute bottom-16 md:static md:w-1/2 md:mt-8 lg:mt-4 lg:w-1/4" onClick={() => handleSignUp()}>done</button>
    </div>
  )
}

export default SignUpContainer