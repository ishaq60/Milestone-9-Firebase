import {
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useRef, useState } from "react";
import auth from "../../Firebase/..Firebase .config";
import { Link } from "react-router-dom";

const Login = () => {
  const [error, setError] = useState("");
  const [success, setsuccess] = useState();
  const emailRef = useRef(null);
  const handalelogin = (e) => {
    e.preventDefault();
    console.log("handale login");
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    //   reset error and success
    setError("");
    setsuccess("");
    // add validation
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
        if(result.user.emailVerified){
            setsuccess("User login Successfully");
        }
        else{
            alert("Please verify Your Email Address")
        }
       
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };
  const resetpassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      console.log("please provide an email ", emailRef.current.value);
      return;
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      console.log("Please Write a Valid email");
      return;
    }
    //    send validation Email
    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Plz Check Your Email");
      })
      .catch((error) => {
        console.error(error.message);
      });
  };
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Register now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <form onSubmit={handalelogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    ref={emailRef}
                    className="input input-bordered"
                    name="email"
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="password"
                    name="password"
                    className="input input-bordered"
                  />
                  <label className="label">
                    <a
                      onClick={resetpassword}
                      href="#"
                      className="label-text-alt link link-hover"
                    >
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn text-3xl btn-primary">LogIn</button>
                </div>
              </form>
              {error && <p className="text-red-700">{error}</p>}
              {success && <p className="text-green-500">{success}</p>}
              <p>
                New To This website? please{" "}
                <Link to="/register"> Register</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
