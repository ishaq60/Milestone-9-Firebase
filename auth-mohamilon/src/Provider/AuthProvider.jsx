import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import auth from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);
const googleAuthProvider=new GoogleAuthProvider()
const AuthProvider = ({ children }) => {
  const [user,setUser]=useState(null);
  const [loading,setloading]=useState(true)
  const createUser=(email,password)=>{
    setloading(true)
    return createUserWithEmailAndPassword(auth,email,password)
  }
  const loginUser=(email,password)=>{
    setloading(loading)
    return signInWithEmailAndPassword(auth,email,password)
  }
  const LogOutUser=()=>{
  setloading(loading)
  return  signOut(auth)
  }
const signInwithGoogle=()=>{
  setloading(true)
  return signInWithPopup(auth,googleAuthProvider)
}
useEffect(()=>{
  const unSubscribe=  onAuthStateChanged(auth,currenUser=>{
        setUser(currenUser)
        console.log("observing current user inside useeffect,",currenUser);
        setloading(false)
    });
    return ()=>{
        unSubscribe();
    }
},[])




  const authInfo={
    user,
    loading,
    createUser,
    loginUser,signInwithGoogle
    ,LogOutUser}
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;

/**
 * 1.Create Context and export it
 * 2.Set provider with value
 * 3.use the Auth provider in main.jsx file
 * 4.access children in the AuthProvider component as children and use it the middle of the provider
 */