// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHkwb970zc-Fhl6HPbLPsMNRONKX8xKvM",
  authDomain: "glasses-authentication-8a4ee.firebaseapp.com",
  projectId: "glasses-authentication-8a4ee",
  storageBucket: "glasses-authentication-8a4ee.appspot.com",
  messagingSenderId: "585500752764",
  appId: "1:585500752764:web:2f61497731d299977e42f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;