import { createContext, useState} from "react"

export const AlertContext = createContext()

export function AlertContextProvider(props) {
    const [message, setMessage] = useState("hi, i'm a message")
    const [img, setImg] = useState("#")

    return (
        <AlertContext.Provider value={{
            message,
            setMessage,
            img,
            setImg
        }}>
            {props.children}
        </AlertContext.Provider>
    )
}