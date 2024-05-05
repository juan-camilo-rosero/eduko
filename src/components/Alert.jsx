import { useContext } from "react"
import { SectionContext } from "../context/SectionContext"
import { AlertContext } from "../context/AlertContext"

function Alert() {
    const {alertDiv, setAlertDiv} = useContext(SectionContext)
    const {message, setMessage, img, setImg} = useContext(AlertContext)
  return (
    <div className={`${(alertDiv) ? "flex" : "hidden"} transition-all w-screen h-screen fixed bg-black top-0 left-0 flex justify-center items-center bg-opacity-75`}>
      <div className={`flex w-[80vw] h-[45vh] bg-blue-dark t-0 rounded-xl items-center flex-col justify-between`}>
          <img src={img} alt="alert image" className="h-40 -mt-20"/>
          <div className="mb-8 w-full flex flex-col items-center">
            <p className="w-4/5 text-light font-semibold text-2xl text-center">{message}</p>
            <button onClick={e => setAlertDiv(false)} className="w-4/5 py-2 bg-blue-turquoise rounded-xl font-semibold text-blue-dark text-xl mt-12 transition-all hover:bg-blue-turquoiseHover">continue</button>
          </div>
      </div>
    </div>
  )
}

export default Alert