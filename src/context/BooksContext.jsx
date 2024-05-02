import { createContext, useState} from "react"

export const BooksContext = createContext()

export function BooksContextProvider(props) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [actualBook, setActualBook] = useState(0)
    const [books, setBooks] = useState([])

    return (
        <BooksContext.Provider value={{
            title,
            setTitle,
            content,
            setContent,
            actualBook,
            setActualBook,
            books,
            setBooks
        }}>
            {props.children}
        </BooksContext.Provider>
    )
}