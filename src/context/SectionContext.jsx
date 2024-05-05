import { createContext, useEffect, useState} from "react"

export const SectionContext = createContext()

export function SectionContextProvider(props) {
    const [heroSection, setHeroSection] = useState(true)
    const [book, setBook] = useState(false)
    const [shop, setShop] = useState(false)
    const [createBook, setCreateBook] = useState(false)
    const [alertDiv, setAlertDiv] = useState(false)
    const [account, setAccount] = useState(false)

    return (
        <SectionContext.Provider value={{
            heroSection,
            setHeroSection,
            book,
            setBook,
            shop,
            setShop,
            createBook,
            setCreateBook,
            alertDiv,
            setAlertDiv,
            account,
            setAccount
        }}>
            {props.children}
        </SectionContext.Provider>
    )
}