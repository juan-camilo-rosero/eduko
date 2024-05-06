import { createContext, useEffect, useState} from "react"
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export const ShopContext = createContext()

export function ShopContextProvider(props) {

    const loadHats = async () => {
        const docRef = doc(db, "shop", "products") // db - collection - document
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            const hats = docSnap.data()
            setHats(hats.hats)

        } else {
            console.log("No such document!");
        }
    }

    const [hats, setHats] = useState([])

    useEffect(() => {})

    return (
        <ShopContext.Provider value={{
            hats,
            setHats,
            loadHats
        }}>
            {props.children}
        </ShopContext.Provider>
    )
}