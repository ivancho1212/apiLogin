// Import the funtions  you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: "AIzaSyB18WSa2CsHH6K8_MYgm8qgA7H7w9UMkLE",
    authDomain: "login-firebase-8af08.firebaseapp.com",
    projectId: "login-firebase-8af08",
    storageBucket: "login-firebase-8af08.appspot.com",
    messagingSenderId: "894666410075",
    appId: "1:894666410075:web:74c8bc1fa5e4ed052d977e"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
// Import the functions you need from the SDKs you need




