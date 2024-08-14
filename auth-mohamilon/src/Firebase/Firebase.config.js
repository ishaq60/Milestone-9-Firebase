// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfUPwtV0hE3vli83m7ePT6emBARHxspak",
  authDomain: "auth-mohamilon-4cb80.firebaseapp.com",
  projectId: "auth-mohamilon-4cb80",
  storageBucket: "auth-mohamilon-4cb80.appspot.com",
  messagingSenderId: "304930300003",
  appId: "1:304930300003:web:2d45209520c6a1326c5856"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default(auth)