import { createContext, useContext, useEffect, useState} from "react"
import { auth } from "../firebase/firebase.config"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth'


export const AuthContext = createContext()

export function useAuth() {
    const context = useContext(AuthContext)
    if(!context){
        console.error("error creating auth context");
    }
    return context
}

export function AuthContextProvider({ children }) {

    const register = async (email, password) => {
        const res = await createUserWithEmailAndPassword(auth, email, password)
    }

    const login = async (email, password) => {
        const res = await signInWithEmailAndPassword(auth, email, password)
    }

    const loginWithGoogle = async () => {
        const googleRes = new GoogleAuthProvider()
        return await signInWithPopup(auth, googleRes)
    }

    const logout = async () => {
        const res = await signOut(auth)
    }
    
    return <AuthContext.Provider 
    value={{
        register,
        login,
        loginWithGoogle,
        logout
    }}>
        {children}
    </AuthContext.Provider>
}