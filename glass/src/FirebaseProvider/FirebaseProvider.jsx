import React, { createContext, useEffect, useState } from 'react';
import {  GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from '../Firebase/FirebaseConfig';
// socailAuthprovider
export const AuthContext=createContext(null)
const Googleprovider = new GoogleAuthProvider();
const Githubprovider = new GithubAuthProvider();
const FirebaseProvider = ({children}) => {
  
  const [user,setuser]=useState(null)
  console.log(user);
    // create user
 const createUser=(email,password)=>{
   return  createUserWithEmailAndPassword(auth, email, password)
     }
     //
     

const signInUser=(email,password)=>{
return  signInWithEmailAndPassword(auth,email,password)

}
//Google Provider
const googleLogin=()=>{
  return signInWithPopup(auth,Googleprovider)
   
}
//Github Provider
const GithubLogin=()=>{
  return signInWithPopup( auth,Githubprovider)
}
//Logout
const logOut=()=>{
  setuser(null)
  signOut(auth)
}



    //observer
    useEffect(()=>{
  onAuthStateChanged(auth,(user)=>{
    if(user){
      setuser(user)
    }
  
  });
    },[])
    const allValues={
      createUser,signInUser,
      googleLogin,
      GithubLogin,
      logOut,
      user
    }
    return (
        <AuthContext.Provider value={allValues}>
       {
        children
       }
        </AuthContext.Provider>
    );
};

export default FirebaseProvider;