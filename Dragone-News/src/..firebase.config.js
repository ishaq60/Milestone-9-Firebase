
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyAYYVQzuTsVC7h5ZbDNMtVYZeNGuYe1rro",
  authDomain: "drgoane-news.firebaseapp.com",
  projectId: "drgoane-news",
  storageBucket: "drgoane-news.appspot.com",
  messagingSenderId: "254285450798",
  appId: "1:254285450798:web:0de1ae0680e90e8ff4d9bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;