import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAFkjsvbCz5mZxjxobBnp0PYn5Y8MqzL4U",
    authDomain: "react-4834d.firebaseapp.com",
    projectId: "react-4834d",
    storageBucket: "react-4834d.appspot.com",
    messagingSenderId: "644439640309",
    appId: "1:644439640309:web:1f81c722591e15169d9dbc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)