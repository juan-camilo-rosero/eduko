import { useContext } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { SectionContext } from "../context/SectionContext";
import { BooksContext } from "../context/BooksContext";

function Book() {
    const {book, setBook} = useContext(SectionContext)
    const {title, content} = useContext(BooksContext)
  return (
    <div className={`fixed h-screen bg-blue-darker w-full left-0 border-t-4 border-blue-turquoise z-40 flex flex-col items-center pt-32 px-6 gap-16 overflow-y-scroll pb-12 transition-all md:px-16 lg:px-24 lg:pt-28 ${(book)
        ? "bottom-0"
        : "-bottom-full mt-40"
    }`}>
        <RiCloseCircleLine className="fixed right-6 -mt-12 text-blue-turquoise text-4xl bg-blue-darker rounded-full cursor-pointer md:right-14 lg:right-20 lg:-mt-0 lg:text-5xl" onClick={() => setBook(false)}/>
        <h2 className="text-center text-light text-3xl font-semibold md:text-4xl">{title}</h2>
        <p className="text-justify text-medium text-xl md:leading-8 lg:w-2/3">{content}</p>
        <button className="w-full py-2 bg-blue-turquoise transition-all hover:bg-blue-turquoiseHover text-blue-darker text-2xl rounded-xl font-semibold md:w-1/3 lg:w-1/4">done</button>
    </div>
  )
}

export default Book