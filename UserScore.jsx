import { useContext } from "react";
import { RiFireFill, RiCopperCoinFill } from "react-icons/ri";
import { UserContext } from "../context/UserContext";

function UserScore() {
  const {points, streak} = useContext(UserContext)
  return (
    <div className="flex gap-8 text-xl lg:text-xl lg:gap-24 font-semibold md:gap-12">
        <div className="flex items-center gap-2 text-light md:gap-3">
            <p>{points}</p>
            <RiCopperCoinFill/>
        </div>
        <div className="flex items-center gap-2 text-blue-turquoise md:gap-3">
            <p>{streak}</p>
            <RiFireFill/>
        </div>
    </div>
  )
}

export default UserScore