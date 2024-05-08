import { useContext, useEffect, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { SectionContext } from "../context/SectionContext";
import { BooksContext } from "../context/BooksContext";
const chatGPTApiKey = import.meta.env.VITE_OPENAI_API_KEY

function Book() {
  const {setBook, createBook, setCreateBook} = useContext(SectionContext)
  const {books, setBooks, setTitle, setContent, updateBooks} = useContext(BooksContext)
  const [interests, setInterests] = useState("")
  const [genre, setGenre] = useState("")
  const [loading, setLoading] = useState(false)

  const handleCreate = async e => {
    setLoading(true)
    const prompt = `Hi, create a ${genre} story about ${interests}. Answer ONLY with the content, without title or anything else. The story must have between 10 and 12 paragraphs `
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

    const story = data.choices[0].message.content

    options.body = JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
            {"role": "user", "content": `Answer ONLY with a title of less than 8 words for the next story: ${story}`}
        ]
    })

    const titleRes = await fetch("https://api.openai.com/v1/chat/completions", options)
    const titleData = await titleRes.json()

    const title = titleData.choices[0].message.content.replace(/['"]/g, '')

    const lastId = (books.length !== 0)
    ? books[books.length - 1].id
    : 0;

    const newBooks = [{
        id: lastId + 1,
        title,
        content: story,
        read: false
    }, ...books]

    setBooks(newBooks)
    setCreateBook(false)
    setTitle(title)
    setContent(story)
    setBook(true)
    setLoading(false)
    await updateBooks(newBooks)
    setInterests("")
  }

  useEffect(() => {
    setGenre("fantasy")
  }, [])
    
  return (
    <div className={`fixed h-screen bg-blue-darker w-full left-0 border-t-4 border-blue-turquoise z-40 flex flex-col items-center pt-32 px-6 gap-16 overflow-y-scroll pb-12 transition-all md:px-16 lg:px-24 lg:pt-28 ${(createBook)
        ? "bottom-0"
        : "-bottom-[150vh]"
    }`}>
        <RiCloseCircleLine className="fixed right-6 -mt-0 text-blue-turquoise text-4xl bg-blue-darker rounded-full cursor-pointer md:right-14 lg:right-20 lg:-mt-0 lg:text-5xl" onClick={() => setCreateBook(false)}/>
        <h2 className="text-center w-4/5 md:w-full text-light text-3xl font-semibold md:text-4xl">new book</h2>
        <input type="text" placeholder="what are your interests?" className="w-4/5 py-2 bg-transparent border-b-2 border-blue-turquoise text-light outline-none text-xl md:w-1/2 lg:w-1/3" onChange={e => {
            setInterests(e.target.value)
        }} value={interests}/>
        <select className="w-4/5 py-2 bg-transparent border-b-2 border-blue-turquoise text-light outline-none text-xl md:w-1/2 lg:w-1/3" onChange={e => {
            setGenre(e.target.value)
        }}>
            <option value="fantasy" className="bg-blue-darker m-0 rounded-0 hover:bg-blue-darker ">Fantasy</option>
            <option value="science_fiction" className="bg-blue-darker m-0 rounded-0 hover:bg-blue-darker ">Science Fiction</option>
            <option value="mystery" className="bg-blue-darker m-0 rounded-0 hover:bg-blue-darker ">Mystery</option>
            <option value="thriller" className="bg-blue-darker m-0 rounded-0 hover:bg-blue-darker ">Thriller</option>
            <option value="romance" className="bg-blue-darker m-0 rounded-0 hover:bg-blue-darker ">Romance</option>
            <option value="horror" className="bg-blue-darker m-0 rounded-0 hover:bg-blue-darker ">Horror</option>
            <option value="non_fiction" className="bg-blue-darker m-0 rounded-0 hover:bg-blue-darker ">Non-Fiction</option>
            <option value="biography" className="bg-blue-darker m-0 rounded-0 hover:bg-blue-darker ">Biography</option>
            <option value="historical_fiction" className="bg-blue-darker m-0 rounded-0 hover:bg-blue-darker ">Historical Fiction</option>
            <option value="poetry" className="bg-blue-darker m-0 rounded-0 hover:bg-blue-darker ">Poetry</option>
        </select>
        <button className="w-4/5 py-2 bg-blue-turquoise transition-all hover:bg-blue-turquoiseHover text-blue-darker text-2xl rounded-xl font-semibold md:w-1/2 md:mt-4 lg:w-1/4 disabled:opacity-50" onClick={() => handleCreate()} disabled = {loading}>{(loading) ? "loading..." : "done"}</button>
    </div>
  )
}

export default Book