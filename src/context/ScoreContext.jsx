import { createContext, useEffect, useState} from "react"
import {user, hatsData} from '../data'

export const ScoreContext = createContext()

export function ScoreContextProvider(props) {
    const [points, setPoints] = useState(0)
    const [streak, setStreak] = useState(0)
    const [streakDate, setStreakDate] = useState(0)
    const [hat, setHat] = useState({})

    const isNextDate = (date1, date2) => {
        const dateObj1 = new Date(date1);
        dateObj1.setDate(dateObj1.getDate() + 1);
        const formattedDate1 = dateObj1.toISOString().split('T')[0];
        return formattedDate1 === date2;
    }

    const formatDate = (date) => {
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        return `${year}-${month}-${day}`;
    }
    
    useEffect(() => {
        setPoints(user.points)
        setStreak(user.streak);
        (isNextDate(user.streakDate, formatDate(new Date())))
        ? setStreak(user.streak)
        : setStreak(0);
        setHat(hatsData[user.hat])
    }, [])

    return (
        <ScoreContext.Provider value={{
            points,
            setPoints,
            streak,
            setStreak,
            streakDate,
            setStreakDate,
            formatDate,
            hat,
            setHat
        }}>
            {props.children}
        </ScoreContext.Provider>
    )
}