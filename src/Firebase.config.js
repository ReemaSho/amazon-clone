import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBrrr4aJeW99QQUBgcFCXRT1ScV4_POlok",
    authDomain: "clone-b2a45.firebaseapp.com",
    projectId: "clone-b2a45",
    storageBucket: "clone-b2a45.appspot.com",
    messagingSenderId: "70131577321",
    appId: "1:70131577321:web:68735f81040215a0b5db78",
    measurementId: "G-XF6MZX82TF",
};

// // Initialize Firebase
initializeApp(firebaseConfig);

export const database = getFirestore();