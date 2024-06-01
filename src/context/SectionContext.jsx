import { createContext, useEffect, useState} from "react"

export const SectionContext = createContext()

export function SectionContextProvider(props) {
    const [heroSection, setHeroSection] = useState(true)
    const [book, setBook] = useState(false)
    const [shop, setShop] = useState(false)
    const [createBook, setCreateBook] = useState(false)
    const [alertDiv, setAlertDiv] = useState(false)
    const [account, setAccount] = useState(false)
    const [signUp, setSignUp] = useState(false)
    const [loginDiv, setLogin] = useState(false)
    const [question, setQuestion] = useState(false)

    const closeAll = e => {
        setHeroSection(false)
        setBook(false)
        setShop(false)
        setCreateBook(false)
        setAlertDiv(false)
        setAccount(false)
        setSignUp(false)
        setQuestion(false)
        setLogin(false)
    }

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
            setAccount,
            signUp,
            setSignUp,
            question,
            setQuestion,
            closeAll,
            loginDiv,
            setLogin
        }}>
            {props.children}
        </SectionContext.Provider>
    )
}
