import { useContext, useState } from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { SectionContext } from "../context/SectionContext";
import { BooksContext } from "../context/BooksContext";
import { UserContext } from "../context/UserContext";
import { AlertContext } from "../context/AlertContext";

const chatGPTApiKey = import.meta.env.VITE_OPENAI_API_KEY

function OpenQuestion() {
  const {question, setQuestion, setAlertDiv} = useContext(SectionContext)
  const {statement, actualBook, content, books, updateBooks, setBooks} = useContext(BooksContext)
  const {points, setPoints, streak, streakDate, setStreak, setStreakDate, formatDate, updateScore} = useContext(UserContext)
  const {setMessage, setImg} = useContext(AlertContext)
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)

  const handleCompleted = async () => {
    setLoading(true)
    const prompt = `Hi, answer ONLY with a 1 if the following answer is correct and 0 if it's incorrect. Question: [${statement}], answer: [${answer}], story: [${content}]`
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

    const isCorrect = data.choices[0].message.content

    if(isCorrect === "1"){
        const booksArr = books;
        const newPoints = (booksArr[actualBook].read) ? 25 : 50
        const totalPoints = points + newPoints
        let newStreak = streak
        let newStrakDate = formatDate(new Date())
        setPoints(totalPoints)
        if(streakDate !== newStrakDate){
            setMessage(`You extended your streak and won ${newPoints} points!!!`)
            setImg(`fire.png`)
            newStreak += 1
            setStreak(streak + 1)
            setStreakDate(formatDate(new Date()))
        }
        else{
            setMessage(`You won ${newPoints} points!!!`)
            setImg(`treasure.png`)
        }
        updateScore(totalPoints, newStreak, newStrakDate)
        setAlertDiv(true)
        booksArr[actualBook].read = true
        setBooks(booksArr)
        updateBooks(booksArr)
        setQuestion(false)
    }
    
    else{
        setMessage("Your answer was wrong :<")
        setImg("error.gif")
        setAlertDiv(true)
        setQuestion(false)
    }
    setLoading(false)
    setAnswer("")
  }
    
  return (
    <div className={`fixed h-screen bg-black/60 backdrop-blur-2xl w-full left-0 border-t-4 border-blue-turquoise z-40 flex flex-col items-center pt-32 px-6 gap-16 overflow-y-scroll pb-12 transition-all md:px-16 lg:px-24 lg:pt-28 ${(question)
        ? "bottom-0"
        : "-bottom-[150vh]"
    }`}>
        <RiCloseCircleLine className="fixed right-6 -mt-0 text-blue-turquoise text-4xl bg-black rounded-full cursor-pointer md:right-14 lg:right-20 lg:-mt-0 lg:text-5xl" onClick={() => setQuestion(false)}/>
        <h2 className="text-center w-4/5 text-light text-3xl font-semibold md:text-4xl">{statement}</h2>
        <textarea type="text" placeholder="your answer..." className="neon-turquoise-box w-full p-4 bg-transparent border-2 border-blue-turquoise text-light outline-none text-xl md:w-4/5 lg:w-1/2 lg:px-6 resize-none" rows={5} onChange={e => {
            setAnswer(e.target.value)
        }} value={answer}/>
        <button className="w-full py-2 bg-transparent border-2 border-blue-turquoise neon-turquoise-box transition-all hover:bg-blue-turquoiseHover text-blue-turquoise hover:text-black text-2xl rounded-xl font-semibold md:w-1/3 lg:w-1/4 disabled:opacity-50" onClick={() => handleCompleted()}disabled = {loading}>{(loading) ? "loading..." : "send"}</button>
    </div>
  )
}

export default OpenQuestion
