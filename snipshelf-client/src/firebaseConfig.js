// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDT-qvmu5HrlVGKkkTr-EjLR5tCaDavIG0",
  authDomain: "snipshelf.firebaseapp.com",
  projectId: "snipshelf",
  storageBucket: "snipshelf.appspot.com",
  messagingSenderId: "1034308492939",
  appId: "1:1034308492939:web:83ac88b62b539779f43e8e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);