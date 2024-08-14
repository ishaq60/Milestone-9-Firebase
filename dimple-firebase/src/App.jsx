import { useState } from 'react'

import './App.css'
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from './firebase/firebase.config';
function App() {
  const [user, setuser] = useState(null)
const auth=getAuth(app)
const GoogleProvider=new GoogleAuthProvider()
const googleSignin=()=>{
signInWithPopup(auth,GoogleProvider)
.then (result=>{
  const user=result.user;
  setuser(user)
})
.catch(error=>{
  const errorCode=error.code
  console.log(errorCode);
})
}
  return (
    <>
      <div>
      
      </div>
      <h1>Firebase + React</h1>
      <div className="card">
      <button onClick={googleSignin}>Google Sign In</button>
      <h5>email :{user?.email}</h5>
      </div>
      
    </>
  )
}

export default App
