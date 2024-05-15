import { useContext } from "react"
import { SectionContext } from "../context/SectionContext"
import { AlertContext } from "../context/AlertContext"
import '../App.css'

function Alert() {
    const {alertDiv, setAlertDiv} = useContext(SectionContext)
    const {message, setMessage, img, setImg} = useContext(AlertContext)
  return (
    <div className={`${(alertDiv) ? "flex" : "hidden"} transition-all w-screen h-screen fixed bg-black top-0 left-0 flex justify-center items-center bg-opacity-75 z-50`}>
      <div className={`flex w-[80vw] h-[45vh] bg-black t-0 rounded-xl items-center flex-col justify-between md:w-[50vw] md:h-auto lg:w-[35vw] lg:mt-16 neon-red-box`}>
          <img src={img} alt="alert image" className="h-40 -mt-20 md:mb-16 lg:mb-10 lg:h-36"/>
          <div className="mb-8 w-full flex flex-col items-center">
            <p className="w-4/5 text-light font-semibold text-2xl text-center md:text-3xl md:w-3/4 lg:text-2xl selection:text-red-600">{message}</p>
            <button onClick={e => setAlertDiv(false)} className="w-4/5 py-2 neon-red-box text-red-600 bg-black  rounded-xl font-semibold text-xl mt-12 transition-all hover:bg-red-900 hover:text-black md:text-3xl md:mt-16 lg:text-2xl lg:mt-10">continue</button>
          </div>
      </div>
    </div>
  )
}

export default Alert