import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firebase-database"

const fire = firebase.initializeApp({
    apiKey: "AIzaSyAuJDiTIi9irFcvQsN8naBftTQatYcZW8Y",
    authDomain: "day-not-wasted.firebaseapp.com",
    projectId: "day-not-wasted",
    storageBucket: "day-not-wasted.appspot.com",
    messagingSenderId: "806790850080",
    appId: "1:806790850080:web:f37c620b93034289c5fe45"
});


export default fire;
