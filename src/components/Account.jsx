import { useContext } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { SectionContext } from "../context/SectionContext";
function Account() {
  const {account, setAccount} = useContext(SectionContext)

  const handleLogout = () => {
    location.reload()
  }
    
  return (
    <div className={`fixed h-[60vh] bg-blue-darker w-full left-0 border-t-4 border-blue-turquoise z-40 flex flex-col items-center justify-between pt-16 px-6 gap-8 pb-12 transition-all md:px-16 lg:px-24 md:h-[50vh] lg:h-[65vh] lg:pt-16 ${(account)
        ? "bottom-0"
        : "-bottom-[150vh]"
    }`}>
        <RiCloseCircleLine className="fixed right-6 -mt-0 text-blue-turquoise text-4xl bg-blue-darker rounded-full cursor-pointer md:right-14 lg:right-20 lg:text-5xl lg:-mt-0" onClick={() => setAccount(false)}/>
        <h2 className="text-center w-4/5 md:w-full text-light text-3xl font-semibold md:text-4xl lg:mb-12">Your account</h2>
        <div className="w-full flex flex-col gap-8 mb-16 items-center">
            <button className="w-full py-2 bg-blue-dark transition-all hover:bg-blue-darkHover text-light text-2xl rounded-xl font-semibold md:w-1/2 lg:w-1/4" onClick={() => handleLogout()}>logout</button>
            <button className="w-full py-2 bg-blue-turquoise transition-all hover:bg-blue-turquoiseHover text-blue-darker text-2xl rounded-xl font-semibold md:w-1/2 lg:w-1/4" onClick={() => setAccount(false)}>cancel</button>
        </div>
    </div>
  )
}

export default Account