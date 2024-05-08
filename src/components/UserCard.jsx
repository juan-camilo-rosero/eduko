import { useContext } from "react";
import { RiAccountCircleFill, RiShoppingCart2Fill } from "react-icons/ri";
import { SectionContext } from "../context/SectionContext";
import Shop from "./Shop";
import { UserContext } from "../context/UserContext";

function UserCard() {
  const {shop, setShop, account, setAccount} = useContext(SectionContext)
  const {hat, username, img} = useContext(UserContext)

  return (
    <figure className={`fixed ${(shop) ? "bottom-1/2 lg:bottom-0" : "bottom-0"} w-screen left-0 h-24 bg-blue-dark flex justify-center gap-8 px-6 md:gap-32 lg:w-1/4 lg:px-0 lg:right-24 lg:left-auto lg:h-full lg:items-center lg:bg-transparent z-10 lg:justify-end transition-all`}>
      <div className="w-screen left-0 h-20 bg-blue-dark flex justify-center px-6 lg:w-80 lg:flex-col lg:pt-4 lg:py-8 lg:h-[60vh] lg:rounded-2xl lg:items-center lg:shadow-xl">
        <div className="w-full flex justify-center gap-8 md:gap-32 lg:flex-col items-center lg:gap-0 lg:h-80">
      <button className="flex flex-col items-center justify-center text-l text-light font-semibold w-24 lg:hidden" onClick={() => setAccount(!account)}>
        <RiAccountCircleFill className="text-2xl lg:hidden"/>
        <p>account</p>
      </button>
        <div className="w-full flex flex-col items-center">
            <img src={hat.url || "hat1.png"} alt="your hat :<" className="absolute w-14 -top-3/4 ml-16 rotate-45 lg:relative lg:top-14"/>
            <img src={img || "profile_photo.webp"} alt="profile photo" className={`object-cover rounded-full h-28 w-28 -mt-14 bg-light border-blue-dark border-8 lg:mt-8 lg:border-blue-turquoise lg:border-4 lg:mb-4`}/>
            <p className="text-center text-sm text-light font-semibold mb-6 lg:text-xl">{username}</p>
        </div>
      <button className="flex flex-col items-center justify-center text-l text-light font-semibold w-20 text-center lg:bg-blue-turquoise lg:w-full lg:text-blue-dark lg:text-xl lg:py-[6px] lg:rounded-md lg:hover:bg-blue-turquoiseHover transition-all" onClick={() => setShop(!shop)}>
        <RiShoppingCart2Fill className="text-2xl lg:hidden"/>
        <p>shop</p>
      </button>
      <button className="hidden lg:flex w-full py-[6px] rounded-md bg-blue-darker text-light items-center justify-center text-xl font-semibold mt-4 hover:bg-blue-darkerHover transition-all" onClick={() => setAccount(!account)}>account</button>
        </div>
      </div>
      <Shop/>
    </figure>
  )
}

export default UserCard