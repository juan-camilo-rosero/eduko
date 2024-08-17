import React, { useContext, useState } from 'react'
import { SectionContext } from "../context/SectionContext";
import { BooksContext } from "../context/BooksContext";
import { UserContext } from "../context/UserContext";
import { AlertContext } from "../context/AlertContext";

function MultipleChoice({question, options, correctAnswer}) {

  const [selectedOption, setSelectedOption] = useState("")
  const [loading, setLoading] = useState(false)
  const {setQuestion, setAlertDiv} = useContext(SectionContext)
  const {statement, actualBook, content, books, updateBooks, setBooks} = useContext(BooksContext)
  const {points, setPoints, streak, streakDate, setStreak, setStreakDate, formatDate, updateScore} = useContext(UserContext)
  const {setMessage, setImg} = useContext(AlertContext)

  const handleSubmit = e => {
    setLoading(true);
    const isCorrect = selectedOption === correctAnswer;
    if(isCorrect){
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
    setLoading(false);
  }

  return (
    <div className='px-6'>
      <h3 className='text-white font-medium text-center text-2xl'>Answer the question</h3>
      
      <div className='flex flex-col w-full h-full gap-8'>
        <p className='text-white/60 text-xl text-center my-6'>{question}</p>
        {options.map((opt, i) => <figure key={i} className={`cursor-pointer hover:text-black py-3 px-4 w-full flex items-center justify-center transition-all ${(opt === selectedOption) ? "bg-blue-turquoise neon-turquoise-box hover:bg-blue-turquoise" : "text-white bg-black hover:bg-white neon-white-box"}`} onClick={e => (opt === selectedOption) ? setSelectedOption("") : setSelectedOption(opt)}>
          <p className='text-base md:text-xl font-semibold'>{opt}</p>
        </figure>)}
        <button className={`w-full mt-6 py-2 bg-transparent border-2 border-blue-turquoise neon-turquoise-box transition-all hover:bg-blue-turquoiseHover text-blue-turquoise hover:text-black text-2xl rounded-xl font-semibold md:w-1/3 lg:w-1/4 disabled:opacity-50`} disabled={selectedOption === ""} onClick={handleSubmit}>Send</button>
      </div>
    </div>
  )
}

export default MultipleChoice