import { useContext, useState, useEffect } from "react";
import OpenQuestion from "./OpenQuestion";
import ConnectWords from "./ConnectWords";
import TranslatePhrase from "./TranslatePhrase";
import MultipleChoice from "./MultipleChoice";
import { RiCloseCircleLine } from "react-icons/ri";
import { SectionContext } from "../context/SectionContext";
import { BooksContext } from "../context/BooksContext";
import { UserContext } from "../context/UserContext";
import { AlertContext } from "../context/AlertContext";
const chatGPTApiKey = import.meta.env.VITE_OPENAI_API_KEY;

function Question() {
  const { question, setQuestion } = useContext(SectionContext);
  const { content } = useContext(BooksContext);
  const [game, setGame] = useState(null);

  useEffect(() => {
    const fetchGame = async () => {
      const prompt = `
        Based on the following story, choose a random type of game to reinforce learning. Return ONLY the JSON with no extra text. The JSON should have a "type" field with one of the following values: "Connect Words", "Translate the Phrase", "Open Question", "Multiple Choice". Include the necessary fields for each game type.

        - If "Connect Words", include:
          {
            "type": "Connect Words",
            "wordsEn": ["word1", "word2", "word3", "word4"],
            "wordsEs": ["palabra1", "palabra2", "palabra3", "palabra4"]
          }

        - If "Translate the Phrase", include:
          {
            "type": "Translate the Phrase",
            "phraseEn": "The phrase in English",
            "phraseEs": "La frase en español" ,
            "randomWords": "3 or 4 random words to confuse separated by spaces"
          }

        - If "Open Question", include:
          {
            "type": "Open Question",
            "question": "The question to be asked"
          }

        - If "Multiple Choice", include:
          {
            "type": "Multiple Choice",
            "question": "The question to be asked",
            "options": ["option1", "option2", "option3", "option4"],
            "correctAnswer": "The correct answer"
          }

        Story: ${content}
      `;
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": 'Bearer ' + chatGPTApiKey,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: prompt }],
        }),
      };
      const res = await fetch("https://api.openai.com/v1/chat/completions", options);
      const data = await res.json();

      try {
        // Extraemos solo la parte del contenido que contiene JSON
        const jsonContent = data.choices[0].message.content.trim();
        
        // Intentamos analizarlo como JSON
        const parsedGame = JSON.parse(jsonContent);
        console.log(parsedGame);
        
        setGame(parsedGame);
      } catch (error) {
        console.error("Error parsing JSON from ChatGPT response:", error);
        setGame({ type: "Error", message: "Unable to parse game response." });
      }
    };

    fetchGame();
  }, [content]);

  if (!game) {
    return <div>Loading...</div>;
  }

  const renderGameComponent = () => {
    switch (game.type) {
      case "Connect Words":
        return (
          <ConnectWords
            wordsEn={game.wordsEn}
            wordsEs={game.wordsEs}
          />
        );
      case "Translate the Phrase":
        return (
          <TranslatePhrase
            phraseEn={game.phraseEn}
            phraseEs={game.phraseEs}
            randomWords={game.randomWords}
          />
        );
      case "Open Question":
        return <OpenQuestion question={game.question} />;
      case "Multiple Choice":
        return (
          <MultipleChoice
            question={game.question}
            options={game.options}
            correctAnswer={game.correctAnswer}
          />
        );
      default:
        return <div>Error: Unknown game type</div>;
    }
  };

  return (
    <div className={`fixed h-screen bg-black/60 backdrop-blur-2xl w-full left-0 border-t-4 border-blue-turquoise z-40 flex flex-col items-center pt-32 px-6 gap-16 overflow-y-scroll pb-12 transition-all md:px-16 lg:px-24 lg:pt-28 ${(question)
      ? "bottom-0"
      : "-bottom-[150vh]"
    }`}>
      <RiCloseCircleLine className="fixed right-6 -mt-10 text-blue-turquoise text-4xl bg-black rounded-full cursor-pointer md:right-14 lg:right-20 lg:-mt-0 lg:text-5xl" onClick={() => setQuestion(false)} />
      {renderGameComponent()}
    </div>
  );
}

export default Question;
