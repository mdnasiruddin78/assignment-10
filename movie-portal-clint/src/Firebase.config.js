// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDgWTbueSH4RlioF-2-Z0rvvlt1h0MDY1I",
  authDomain: "assignment-10-d37f8.firebaseapp.com",
  projectId: "assignment-10-d37f8",
  storageBucket: "assignment-10-d37f8.firebasestorage.app",
  messagingSenderId: "444931409078",
  appId: "1:444931409078:web:96a92241258928148a1217"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);