import React, { useState, useEffect, useContext } from 'react';
import { SectionContext } from "../context/SectionContext";
import { BooksContext } from "../context/BooksContext";
import { UserContext } from "../context/UserContext";
import { AlertContext } from "../context/AlertContext";

function TranslatePhrase({ phraseEn, phraseEs, randomWords }) {
  const phraseEnArr = phraseEn.split(" ");
  const phraseEsArr = phraseEs.split(" ");
  const [options, setOptions] = useState([]);
  const {question, setQuestion, setAlertDiv} = useContext(SectionContext)
  const {statement, actualBook, content, books, updateBooks, setBooks} = useContext(BooksContext)
  const {points, setPoints, streak, streakDate, setStreak, setStreakDate, formatDate, updateScore} = useContext(UserContext)
  const {setMessage, setImg} = useContext(AlertContext)
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [loading, setLoading] = useState(false)

  const handleCompleted = () => {
    setLoading(true);
    const isCorrect = selectedOptions.join(" ") === phraseEn;
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
    setSelectedOptions([]);  // Restablece selectedOptions a un arreglo vacío
    setLoading(false);
  };

  // Función para desordenar el arreglo usando Fisher-Yates
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const shuffledOptions = shuffleArray([...phraseEnArr, ...randomWords.split(" ")]);
    setOptions(shuffledOptions);
  }, [phraseEn, randomWords]);

  const handleOptionClick = (opt) => {
    if (selectedOptions.includes(opt)) {
      // Si la opción está en selectedOptions (div superior), quitarla de ahí y devolverla a options
      setSelectedOptions(selectedOptions.filter(option => option !== opt));
    } else {
      // Si la opción no está en selectedOptions (div inferior), agregarla
      setSelectedOptions([...selectedOptions, opt]);
    }
  };

  return (
    <div className='px-6'>
      <h3 className='text-white font-medium text-center text-2xl'>Translate the sentence</h3>
      <p className='text-white/60 text-xl text-center mt-8 mb-12'>{phraseEs}</p>

      <div className='border-b-2 border-b-white mb-12 flex flex-row flex-wrap min-h-20 py-2 gap-3 mt-10'>
        {selectedOptions.map((opt, i) => (
          <figure
            key={i}
            className='text-white neon-white-box py-2 px-6 w-auto flex items-center h-12 justify-center transition-all cursor-pointer'
            onClick={() => handleOptionClick(opt)}  // Permite que la opción se quite cuando se presiona
          >
            <p className='text-base md:text-xl font-semibold'>{opt}</p>
          </figure>
        ))}
      </div>

      <div className='flex flex-row flex-wrap w-full gap-8'>
        {options.map((opt, i) => (
          <figure
            key={i}
            className={`cursor-pointer hover:bg-white hover:text-black text-white neon-white-box py-3 px-6 w-auto flex items-center justify-center transition-all ${selectedOptions.includes(opt) ? 'opacity-50' : ''}`}
            onClick={() => handleOptionClick(opt)}
          >
            <p className='text-base md:text-xl font-semibold'>{opt}</p>
          </figure>
        ))}
      </div>

      <button className="w-full mt-12 py-2 bg-transparent border-2 border-blue-turquoise neon-turquoise-box transition-all hover:bg-blue-turquoiseHover text-blue-turquoise hover:text-black text-2xl rounded-xl font-semibold md:w-1/3 lg:w-1/4 disabled:opacity-50" onClick={() => handleCompleted()}disabled = {loading}>{(loading) ? "loading..." : "send"}</button>
    </div>
  );
}

export default TranslatePhrase;
