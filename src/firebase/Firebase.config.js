// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDkzuPqHxnrIIg_5tO04qsa0qyqHVO5sSk",
    authDomain: "authentication-assignment9.firebaseapp.com",
    projectId: "authentication-assignment9",
    storageBucket: "authentication-assignment9.appspot.com",
    messagingSenderId: "202940373051",
    appId: "1:202940373051:web:e87da3b19a92ed497f241e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;