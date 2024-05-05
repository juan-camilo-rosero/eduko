import { createContext, useEffect, useState} from "react"

export const SectionContext = createContext()

export function SectionContextProvider(props) {
    const [heroSection, setHeroSection] = useState(false)
    const [book, setBook] = useState(false)
    const [shop, setShop] = useState(false)
    const [createBook, setCreateBook] = useState(false)
    const [alertDiv, setAlertDiv] = useState(false)

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
            setAlertDiv
        }}>
            {props.children}
        </SectionContext.Provider>
    )
}