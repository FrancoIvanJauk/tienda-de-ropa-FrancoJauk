// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA_z_Wwl-ma_7XtzKK55uq5F9Ijf7maeSM",
  authDomain: "outfitreaction-cursoreact.firebaseapp.com",
  projectId: "outfitreaction-cursoreact",
  storageBucket: "outfitreaction-cursoreact.appspot.com",
  messagingSenderId: "363497067399",
  appId: "1:363497067399:web:5f13e0d910363a25f57922",
  measurementId: "G-KRLLMYLWZQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);