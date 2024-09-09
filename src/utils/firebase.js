// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDSEIkXYkQ-mmrzMUZ604z7kJeSZOl9d94",
  authDomain: "netflixgpt-5091.firebaseapp.com",
  projectId: "netflixgpt-5091",
  storageBucket: "netflixgpt-5091.appspot.com",
  messagingSenderId: "179326709149",
  appId: "1:179326709149:web:dc57f1902f5bbc53185374",
  measurementId: "G-G7B6E781X8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);