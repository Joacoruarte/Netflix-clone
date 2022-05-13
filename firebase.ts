// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDZ7Rau0BiuDRegcWrtNxlJKz9Cyqz26Ks",
    authDomain: "netflix-clone-30d23.firebaseapp.com",
    projectId: "netflix-clone-30d23",
    storageBucket: "netflix-clone-30d23.appspot.com",
    messagingSenderId: "290021651604",
    appId: "1:290021651604:web:922700d9e307ebccd67081",
    measurementId: "G-12JQDZ3RYM"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }