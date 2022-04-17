// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfNPVzCtl092mNkgUnaLMRq74oRUQgguM",
  authDomain: "single-doctor.firebaseapp.com",
  projectId: "single-doctor",
  storageBucket: "single-doctor.appspot.com",
  messagingSenderId: "784992581293",
  appId: "1:784992581293:web:57b075ff989160f4fbf824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;