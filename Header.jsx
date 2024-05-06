import { useContext } from "react"
import { SectionContext } from "../context/SectionContext"
import UserScore from "./UserScore"

function Header() {
  const {heroSection, setSignUp, signUp} = useContext(SectionContext)

  return (
    <header className="w-full bg-blue-dark px-6 flex justify-between items-center fixed t-0 h-16 lg:px-24 md:px-16 z-50">
        <div className="flex gap-4 items-center cursor-pointer lg:gap-6">
            <img src="logo.png" alt="Logo eduku" className="w-10"/>
            <h2 className="text-xl text-light font-semibold lg:text-2xl">Eduku</h2>
        </div>
        {(heroSection)
          ? <button className="py-2 px-8 bg-blue-turquoise rounded-xl font-semibold text-blue-dark hover:bg-blue-turquoiseHover transition-all lg:text-xl" onClick={() => setSignUp(!signUp)}>sign up</button>
          : <UserScore/>
        }
        
    </header>
  )
}

export default Header