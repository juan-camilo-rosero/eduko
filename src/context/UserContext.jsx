import { createContext, useContext, useEffect, useState} from "react"
import { BooksContext } from "./BooksContext"
import {hatsData} from '../data'
import { doc, getDoc, setDoc, collection, addDoc } from "firebase/firestore";
import { db } from "../firebase/firebase.config";

export const UserContext = createContext()

export function UserContextProvider(props) {
    const [userEmail, setUserEmail] = useState("")
    const [username, setUsername] = useState("loading...")
    const [points, setPoints] = useState(0)
    const [streak, setStreak] = useState(0)
    const [streakDate, setStreakDate] = useState("2024-01-01")
    const [hat, setHat] = useState(0)
    const [img, setImg] = useState("profile.webp")
    const {setBooks} = useContext(BooksContext)

    const loadBooks = async id => {
        const docRef = doc(db, "books", id) // db - collection - document
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            const books = docSnap.data() 
            setBooks(books.books)

        } else {
            console.log("No such document!");
        }
    }

    const loadUser = async email => {
        const docRef = doc(db, "users", email) // db - collection - document
        const docSnap = await getDoc(docRef)

        if (docSnap.exists()) {
            const user = docSnap.data() 
            
            setPoints(user.points)
            setStreak(user.streak)
            setHat(hatsData[user.hat])
            setStreakDate(user.streakDate)
            setUsername(user.username)
            setImg(user.img)

            loadBooks(user.books)
        } else {
            console.log("No such document!");
        }
    }

    const createUser = async (email, username, img) => {
        const booksRef = await addDoc(collection(db, "books"), {
            books: []
        });

        // const yesterdayDate = formatDate(new Date())
        const yesterdayDate = new Date().setDate(new Date().getDate() - 1)

        await setDoc(doc(db, "users", email), {
            username,
            img,
            streak: 0,
            points: 0,
            hat: 0,
            books: booksRef.id,
            streakDate: yesterdayDate
        })

        setUsername(username)
        setStreakDate(yesterdayDate)
        setImg(img)
    }

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
        setPoints(points)
        setStreak(streak);
        (isNextDate(streakDate, formatDate(new Date())))
        ? setStreak(streak)
        : setStreak(0);
        setHat(hatsData[hat])
    }, [])

    return (
        <UserContext.Provider value={{
            userEmail,
            setUserEmail,
            username,
            setUsername,
            points,
            setPoints,
            streak,
            setStreak,
            streakDate,
            setStreakDate,
            formatDate,
            hat,
            setHat,
            loadUser,
            img,
            setImg,
            createUser
        }}>
            {props.children}
        </UserContext.Provider>
    )
}