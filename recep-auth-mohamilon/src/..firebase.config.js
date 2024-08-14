// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-CWIugpTCV_4s-4Jy7NY3PXpgQmlpw3s",
  authDomain: "recep-auth-mohamilon.firebaseapp.com",
  projectId: "recep-auth-mohamilon",
  storageBucket: "recep-auth-mohamilon.appspot.com",
  messagingSenderId: "36494625841",
  appId: "1:36494625841:web:d7a7ad5b99698c582dd910"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default (auth)