// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration


//dev database

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
//   authDomain: "snipshelf.firebaseapp.com",
//   projectId: "snipshelf",
//   storageBucket: "snipshelf.appspot.com",
//   messagingSenderId:process.env.NEXT_PUBLIC_FIREBASE_MSG_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APPID
// };


//production database

const firebaseConfig = {
  apiKey: process.env.PROD_FIREBASE_APIKEY,
  authDomain: "snipit-e564b.firebaseapp.com",
  projectId: "snipit-e564b",
  storageBucket: "snipit-e564b.appspot.com",
  messagingSenderId:process.env.PROD_FIREBASE_MSG_ID,
  appId: process.env.PROD_FIREBASE_APPID
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);