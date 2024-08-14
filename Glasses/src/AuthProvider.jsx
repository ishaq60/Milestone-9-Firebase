import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  TwitterAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext(null);
const Googleprovider = new GoogleAuthProvider();
const facebookProvider = new FacebookAuthProvider();
const twitterProvider=new TwitterAuthProvider()

const AuthProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [currentUser,setCurrentuser]=useState(null)
  const [loading,setloading]=useState(true)
  console.log(currentUser);

  const createUser = (email, password) => {
    setloading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //update user Profile
   const updateUserProfile=(name,image)=>{
   return updateProfile(auth.currentUser, {
      displayName: name,
       photoURL: image
    })
   }
  // const login
  const userSignIn = (email, password) => {
    setuser(true)
    return signInWithEmailAndPassword(auth, email, password);
  };
  const userSignout = () => {
    setCurrentuser(null)
  return signOut(auth)
  setuser(false)
  };

  // GOOGLE Autentication
  const googleAuthentication = () => {
    setuser(true)
    return signInWithPopup(auth, Googleprovider);
  };

  // facebook provider
  const facebookAuthentications = () => {
    setuser(true)
    return signInWithPopup(auth, facebookProvider);
  };
//
const twiterSignIn=()=>{
  setuser(true)
 return signInWithPopup(auth,twitterProvider)
}
  useEffect(()=>{
    const unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
        if(currentUser){
        setCurrentuser(currentUser)
        console.log(currentUser);
        setuser(false)
        }
        else {
           console.log("kog out"); 
        }
    });
    return()=>{
      unsubscribe()
    }
  },[])

  const authInfo = {
    createUser,
    userSignIn,
    userSignout,
    user,
    setuser,
    googleAuthentication,
    facebookAuthentications,currentUser,twiterSignIn,loading,updateUserProfile
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;

