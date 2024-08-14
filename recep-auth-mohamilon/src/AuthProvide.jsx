import { createContext, useEffect, useState } from "react";
// import {  signInWithEmailAndPassword } from "firebase/auth";
 export  const AuthContext=createContext(null)
 const provider= new GoogleAuthProvider()
import React from 'react';

import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import auth from "./..firebase.config";

const AuthProvide = ({children}) => {
    const [user,setUser]=useState(null)
  
const [loading,setloding]=useState(true)

const signIn=(email,password)=>{
    setloding(true)
return signInWithEmailAndPassword(auth,email,password)
}


const signUp=(email,password)=>{
return createUserWithEmailAndPassword(auth,email,password)
}
const Signout=()=>{
    signOut(auth)
}
const googleSignIn=()=>{
signInWithPopup(auth,provider)
}

useEffect(()=>{
    const unsubscribe= onAuthStateChanged(auth,currentUser=>{
     setUser(currentUser)
     console.log("observing current user",currentUser);
     setloding(false)
    })
    return ()=>{
        unsubscribe()
    }
},[])
const authInfo={
    signIn,signUp,user,Signout,loading,googleSignIn,currentUser
}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
      {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvide;







/**
 *          steps
 * 1.Create Context
 * 2.SET pROVIDER WITH VALUE
 * 3.Use the auth provider in main.jsx file
 * 
 */