import { useContext } from "react"
import { SectionContext } from "../context/SectionContext"
import UserScore from "./UserScore"
import '../App.css'

function Header() {
  const {heroSection, setLogin, loginDiv} = useContext(SectionContext)

  return (
    <header className="w-full bg-black px-6 flex justify-between items-center fixed t-0 h-16 lg:px-24 md:px-16 z-50">
        <div className="flex gap-4 items-center cursor-pointer lg:gap-6">
            <img src="logo.png" alt="Logo eduku" className="w-10"/>
            <h2 className="text-xl text-light font-semibold lg:text-2xl">Eduko AI</h2>
        </div>
        {(heroSection)
          ? <button className="py-1 px-8 bg-transparent border-2 border-blue-turquoise neon-turquoise-box rounded-xl font-semibold text-blue-turquoise hover:bg-blue-turquoiseHover transition-all lg:text-xl hover:text-black " onClick={() => setLogin(!loginDiv)
        }>login</button>
          : <UserScore/>
        }
        
    </header>
  )
}

export default Header
