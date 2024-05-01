import { createContext, useState} from "react"

export const BooksContext = createContext()

export function BooksContextProvider(props) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")

    return (
        <BooksContext.Provider value={{
            title,
            setTitle,
            content,
            setContent
        }}>
            {props.children}
        </BooksContext.Provider>
    )
}
