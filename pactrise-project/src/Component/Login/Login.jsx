import {
  GithubAuthProvider,
  GoogleAuthProvider,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import auth from "../../Firebase/Firebase.config";
import { Link } from "react-router-dom";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";

const Login = () => {
  const provider = new GoogleAuthProvider();
  const GitProvider = new GithubAuthProvider();
  const [user, setuser] = useState(null);
  const [seccessfully, setsuccessfully] = useState();
  const [showpassword, setshowpassword] = useState();
  const [error,setError]=useState()
  const emailRef=useRef(null)
  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("User signed in: ", user);
        setuser(user);
      })
      .catch((error) => {
        console.log("Error:", error.message);
      });
  };
  const handalegithubSignIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, GitProvider)
      .then((result) => {
        const user = result.user;
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  // Email and password useSignUp

  const handaleSubmitted = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
   
    console.log(email, password);
    setError("")
    setsuccessfully("")
    console.log("submitted");
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;
        if(result.user.emailVerified){
          setsuccessfully("user login Successfully");
          console.log("SignIn Successfully");
        }
        else{
          setError("you need verified  email")
        }
        
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const resetpassword=()=>{
    const email=emailRef.current.value
    if(!email){
      setError("Invalid Email")
      return;
    }
    else if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)){
      setError('plz give valid email')
      return
    }
    sendPasswordResetEmail(auth,email)
    .then(()=>{
     alert("check Your email")
    })
    .catch(error=>{

 console.error(error.message);

      
    })
  }
  return (
    <div>
      <div>
        <h1 className="text-center">This is Login Page</h1>
        <h1 className="text-3xl text-center">Please Login</h1>
        <div className=" border py-5 p-5 mx-auto md:w-1/2">
          <form onSubmit={handaleSubmitted}>
            <input
              className="border-gray-300 w-full bg-gray-100 px-2 py-2"
              type="email"
              placeholder="Email"
              name="email"
              id=""
            />
            <br />
            <div className="relative">
              <input
                className="border-gray-300 w-full mt-2 px-2 py-2 bg-gray-200"
                type={showpassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                id=""
              />
              <span
                onClick={() => setshowpassword(!showpassword)}
                className="absolute top-4 right-2"
              >
                <FaEyeSlash />
              </span>
              <br />
          <button onClick={resetpassword} ref={emailRef}>Forget Password</button>
            </div>
            <br />

            <div className="gap-2 text-center">
              <p>Or SignIn with </p>
              <div className="border flex justify-around py-2">
                <button onClick={handleSignIn} className="px-5 mr-2">
                  {" "}
                  <FaGoogle />
                </button>
                <button onClick={handalegithubSignIn}>
                  <span className="text-center justify-center">
                    <FaGithub />
                  </span>
                </button>
              </div>
            </div>

            <input
              className="btn w-2/3 mt-2 btn-primary"
              type="submit"
              value="Submit"
            />
            {seccessfully && <p className="text-green-700">{seccessfully}</p>}
            {
              error && <p className="text-red-700">{error}</p>
            }
          </form>
          <h1>
            You are New This website?please{" "}
            <Link to="/register">
              <span className="text-teal-700">Register</span>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Login;
