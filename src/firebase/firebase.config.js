import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseApiKey = import.meta.env.VITE_FIREBASE_API_KEY

const firebaseConfig = {

  apiKey: firebaseApiKey,

  authDomain: "eduku-2187c.firebaseapp.com",

  projectId: "eduku-2187c",

  storageBucket: "eduku-2187c.appspot.com",

  messagingSenderId: "472045698087",

  appId: "1:472045698087:web:fcc5d2f4c9d2c4ad87a202"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app);