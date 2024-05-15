import { useContext, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { SectionContext } from "../context/SectionContext";
import { AuthContext } from "../context/AuthContext";
import { UserContext } from "../context/UserContext";
import '../App.css'

const imgBBApiKey = import.meta.env.VITE_IMGBB_API_URL

function Account() {
  const {account, setAccount} = useContext(SectionContext)
  const {logout} = useContext(AuthContext)
  const {setUsername, setImg, updateProfile, username, img} = useContext(UserContext)
  const [newUsername, setNewUsername] = useState("")
  const [newImg, setNewImg] = useState("")

  const handleLogout = async () => {
    await logout()
    location.reload()
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
          setNewImg(imageUrl)
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

  const handleUpdate = async () => {
    setImg(newImg || img)
    setUsername(newUsername)
    await updateProfile(newUsername, newImg || img)
    setAccount(false)
  }
    
  return (
    <div className={`fixed h-screen bg-blue-darker w-full left-0 border-t-4 border-blue-turquoise z-40 flex flex-col items-center justify-between pt-28 px-6 gap-8 pb-12 transition-all md:px-16 lg:px-24  ${(account)
        ? "bottom-0"
        : "-bottom-[150vh]"
    }`}>
        <RiCloseCircleLine className="fixed right-6 -mt-0 text-blue-turquoise text-4xl bg-blue-darker rounded-full cursor-pointer md:right-14 lg:right-20 lg:text-5xl lg:-mt-0" onClick={() => setAccount(false)}/>
        <h2 className="text-center w-4/5 md:w-full text-light text-3xl font-semibold md:text-4xl lg:mb-12">Your account</h2>
        <div className="w-full flex flex-col gap-8 items-center">
          <div className="flex justify-between items-end md:w-3/5 lg:w-1/4 lg:items-center lg:justify-center">
            <span className="text-light text-xl font-semibold mr-12 lg:mr-4">Username:</span>
            <input type="text" className="w-full py-1 bg-transparent border-b-2 border-blue-turquoise text-light outline-none text-xl md:w-1/2 lg:w-full" placeholder={username} onChange={e => {
              setNewUsername(e.target.value)
            }}/>
          </div>
          <div className="flex justify-between items-end md:w-3/5 lg:w-1/4 lg:items-center lg:justify-center">
            <span className="text-light text-xl font-semibold">Profile picture:</span>
            <input type="file" className="w-1/2 py-1 bg-transparent border-b-2 border-blue-turquoise text-light outline-none text-xl md:w-1/2 lg:w-full" onChange={e => handleUploadImg(e.target.files[0])}/>
          </div>
        </div>
        <div className="w-full flex flex-col gap-8 mb-8 items-center lg:gap-4 lg:mb-0">
            <button className="w-full py-2 bg-blue-dark transition-all hover:bg-blue-darkHover text-light text-2xl rounded-xl font-semibold md:w-1/2 lg:w-1/4" onClick={() => handleUpdate()}>update data</button>
            <button className="w-full py-2 bg-blue-dark transition-all hover:bg-blue-darkHover text-light text-2xl rounded-xl font-semibold md:w-1/2 lg:w-1/4" onClick={() => handleLogout()}>logout</button>
            <button className="w-full py-2 bg-blue-turquoise transition-all hover:bg-blue-turquoiseHover text-blue-darker text-2xl rounded-xl font-semibold md:w-1/2 lg:w-1/4" onClick={() => setAccount(false)}>cancel</button>
        </div>
    </div>
  )
}

export default Account