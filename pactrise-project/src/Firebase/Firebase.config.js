// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDC0zRONRRxKHteHDkr28F10PigsNsZmT0",
  authDomain: "pactrice-user-auth.firebaseapp.com",
  projectId: "pactrice-user-auth",
  storageBucket: "pactrice-user-auth.appspot.com",
  messagingSenderId: "327234300543",
  appId: "1:327234300543:web:cbce818f62b53542f9ad4a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default (auth)