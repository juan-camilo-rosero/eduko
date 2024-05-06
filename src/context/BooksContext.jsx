import { createContext, useState} from "react"
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";


export const BooksContext = createContext()

export function BooksContextProvider(props) {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [actualBook, setActualBook] = useState(0)
    const [books, setBooks] = useState([])
    const [booksId, setBooksId] = useState("")
    const [statement, setStatement] = useState("Question")

    const updateBooks = async (newBooks) => {
        await updateDoc(doc(db, "books", booksId), {
            books: newBooks
        })
    }

    return (
        <BooksContext.Provider value={{
            title,
            setTitle,
            content,
            setContent,
            actualBook,
            setActualBook,
            books,
            setBooks,
            booksId,
            setBooksId,
            updateBooks,
            statement,
            setStatement
        }}>
            {props.children}
        </BooksContext.Provider>
    )
}