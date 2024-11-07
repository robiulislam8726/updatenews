// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvhJsSxNfHCsXYcZtQlHNliUKtgMV9dg0",
  authDomain: "react-dragon-news-auth-21018.firebaseapp.com",
  projectId: "react-dragon-news-auth-21018",
  storageBucket: "react-dragon-news-auth-21018.appspot.com",
  messagingSenderId: "633264159878",
  appId: "1:633264159878:web:0eacf5e002d2634d612507"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;