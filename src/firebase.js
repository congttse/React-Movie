// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBKT9-W9TC4hq9jaVU4SM_l1GGXxJ7_HDQ",
    authDomain: "films-aa832.firebaseapp.com",
    projectId: "films-aa832",
    storageBucket: "films-aa832.appspot.com",
    messagingSenderId: "347115102219",
    appId: "1:347115102219:web:ad7c5265971705c925e70e",
    measurementId: "G-V3NK9ZGTHN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
