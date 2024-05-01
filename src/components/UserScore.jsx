import { RiFireFill, RiCopperCoinFill } from "react-icons/ri";

function UserScore() {
  return (
    <div className="flex gap-8 text-xl lg:text-xl lg:gap-24 font-semibold md:gap-12">
        <div className="flex items-center gap-2 text-light md:gap-3">
            <p>2000</p>
            <RiCopperCoinFill/>
        </div>
        <div className="flex items-center gap-2 text-blue-turquoise md:gap-3">
            <p>15</p>
            <RiFireFill/>
        </div>
    </div>
  )
}

export default UserScore