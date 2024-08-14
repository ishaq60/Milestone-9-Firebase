// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC30LgI-aXjnOLf01HBJl_48JsdDy0kNBs",
  authDomain: "user-email-password-cafff.firebaseapp.com",
  projectId: "user-email-password-cafff",
  storageBucket: "user-email-password-cafff.appspot.com",
  messagingSenderId: "38361388769",
  appId: "1:38361388769:web:2a9e1476358b5fd2a149a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;