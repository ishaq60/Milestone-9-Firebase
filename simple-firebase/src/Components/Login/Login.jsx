import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import app from "../../firebase/Firebase.init";
const Login = () => {
  const [user, setUser] = useState(null);
  const auth = getAuth(app);
  console.log(app);
  const Googleprovider = new GoogleAuthProvider();
  const githubProvider=new GithubAuthProvider()
  const handalegoogle = () => {
    signInWithPopup(auth, Googleprovider)
      .then((result) => {
        const loginuser = result.user;
        console.log(user);
        setUser(loginuser);
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };
const handalegithub=()=>{
signInWithPopup(auth,githubProvider)
.then(result =>{
  const user=result.user
  setUser(user)
})
.catch(error=>{
  console.log(error);
})
}

  const handalsignout = () => {
    signOut(auth)
      .then((result) => {
        console.log(result);
        setUser(null);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      { user?
        <button onClick={handalsignout}>Sign Out</button>:
       <div >
         <button onClick={handalegoogle}>Google Login</button>
         <button onClick={handalegithub}>Github Login</button>
       </div>
      }

      <div>
        <h3>User:{user?.displayName}</h3>
        <h5>Email:{user?.email}</h5>
        <img src={user?.photoURL} alt="" />
      </div>
    </div>
  );
};

export default Login;
