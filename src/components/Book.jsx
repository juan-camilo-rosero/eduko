import { useContext, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { SectionContext } from "../context/SectionContext";
import { BooksContext } from "../context/BooksContext";
import { UserContext } from "../context/UserContext";
import { AlertContext } from "../context/AlertContext";

const chatGPTApiKey = import.meta.env.VITE_OPENAI_API_KEY

function Book() {
  const {book, setBook, setQuestion} = useContext(SectionContext)
  const {title, content, setStatement} = useContext(BooksContext)
  const [loading, setLoading] = useState(false)

  const handleCompleted = async () => {
    setLoading(true)
    const prompt = `Hi, create a question about the following story. Answer ONLY with the question: ${content}`
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": 'Bearer ' + chatGPTApiKey
        },
        body: JSON.stringify({
            model: "gpt-3.5-turbo",
            messages: [
                {"role": "user", "content": prompt}
            ]
        })
    }
    const res = await fetch("https://api.openai.com/v1/chat/completions", options)
    const data = await res.json()

    const question = data.choices[0].message.content

    setStatement(question)
    setBook(false)
    setQuestion(true)
    setLoading(false)
  }
    
  return (
    <div className={`fixed h-screen bg-black w-full left-0 border-t-4 border-blue-turquoise z-40 flex flex-col items-center pt-32 px-6 gap-16 overflow-y-scroll pb-12 transition-all md:px-16 lg:px-24 lg:pt-28 ${(book)
        ? "bottom-0"
        : "-bottom-[150vh]"
    }`}>
        <RiCloseCircleLine className="fixed right-6 -mt-0 text-blue-turquoise text-4xl bg-black rounded-full cursor-pointer md:right-14 lg:right-20 lg:-mt-0 lg:text-5xl" onClick={() => setBook(false)}/>
        <h2 className="text-center w-4/5 md:w-full text-blue-turquoise text-3xl font-semibold md:text-4xl">{title}</h2>
        <p className="text-justify text-medium text-xl md:leading-8 lg:w-2/3">{content}</p>
        <button className="w-full py-2 bg-transparent border-2 border-blue-turquoise neon-turquoise-box rounded-xl transition-all hover:bg-blue-turquoiseHover text-blue-turquoise hover:text-black text-2xl font-semibold md:w-1/3 lg:w-1/4 disabled:opacity-50" onClick={() => handleCompleted()} disabled = {loading}>{(loading) ? "loading..." : "done"}</button>
    </div>
  )
}

export default Book