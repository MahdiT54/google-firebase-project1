// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBggOojii0sO8ouMhsM-yMayaLFG4pWN4g",
  authDomain: "fir-nav-37caa.firebaseapp.com",
  projectId: "fir-nav-37caa",
  storageBucket: "fir-nav-37caa.appspot.com",
  messagingSenderId: "752612021343",
  appId: "1:752612021343:web:a8022911ea9581d0b777ea"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
