import SignUpPage from "./components/SignUpPage";
import { email, password } from "./components/SignUpPage"  

import { initializeApp } from "firebase/app";
import { 
    getFirestore 
} from "firebase/firestore"
import {
    getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword
}from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyACQCEbGGkFLra0S-PQB1FyoQCSzJ_k6iE",
    authDomain: "fir-tutorial-8b83e.firebaseapp.com",
    projectId: "fir-tutorial-8b83e",
    storageBucket: "fir-tutorial-8b83e.appspot.com",
    messagingSenderId: "154291836076",
    appId: "1:154291836076:web:931a15f0cbeb276fb53b09",
    measurementId: "G-R5L0MXNKMJ"
};

// initialize firebase

initializeApp(firebaseConfig);

const auth = getAuth();

// const signInForm = document.querySelector(".signIn")
// signInForm.addEventListener('submit', (e) => {
//     e.preventDefault()

//     const email = signInForm.username.value
//     const password = signInForm.password.value

//     createUserWithEmailAndPassword(auth, email, password)
//         .them((cred) =>{
//             window.alert(`user created ${cred.user}`)
           
//             dashboardSection.classList.remove('hidden')
//         })
//         .catch((err) => {
//             window.alert(`ALERT ${err.user}`)
//         })
// })

const loginForm = document.querySelector('.login')
loginForm.addEventListener('submit', (e) => {
   e.preventDefault()

   

   signInWithEmailAndPassword(auth, SignUpPage.email, password)
    .then((cred) => {
        window.alert(`User created: ${cred.user}`)

        
    })
    .catch((err) =>{
        window.alert(`ALERT: ${err.message}`)
    })
    
})