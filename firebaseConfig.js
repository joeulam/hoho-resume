// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC7Zsu8X88WeL7xT0cJsFmRWZc6BX8F8Kw",
  authDomain: "nextjs-resume.firebaseapp.com",
  projectId: "nextjs-resume",
  storageBucket: "nextjs-resume.appspot.com",
  messagingSenderId: "741483984964",
  appId: "1:741483984964:web:e947772cf825b827cc2411",
  measurementId: "G-3GBSG9CS6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);