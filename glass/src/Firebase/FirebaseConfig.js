
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDo12w5-OHso57I-VsBlCBqHRIrtXoVi6U",
  authDomain: "glasses-authentication-5c9f7.firebaseapp.com",
  projectId: "glasses-authentication-5c9f7",
  storageBucket: "glasses-authentication-5c9f7.appspot.com",
  messagingSenderId: "288535850665",
  appId: "1:288535850665:web:6cb74b578bd855df6303b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;