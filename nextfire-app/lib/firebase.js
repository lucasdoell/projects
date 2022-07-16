// Import the functions you need from the SDKs you need
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAnfQnCGeBcOk2IwrT0FRlPFncDcacJuMw",
  authDomain: "nextfire-f4fa3.firebaseapp.com",
  projectId: "nextfire-f4fa3",
  storageBucket: "nextfire-f4fa3.appspot.com",
  messagingSenderId: "1008689359604",
  appId: "1:1008689359604:web:19214a188ea1267d430ca1",
  measurementId: "G-09GX3N7129"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig)
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const analytics = getAnalytics(firebase); 