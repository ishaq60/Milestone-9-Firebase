// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuHcxLtt00CzVKrAPGBKA-gBIVsY8f9_Y",
  authDomain: "simple-firebase-1dc13.firebaseapp.com",
  projectId: "simple-firebase-1dc13",
  storageBucket: "simple-firebase-1dc13.appspot.com",
  messagingSenderId: "272917243398",
  appId: "1:272917243398:web:6abc8f16f98548adc0c587"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app