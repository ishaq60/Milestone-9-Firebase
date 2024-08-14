import { createUserWithEmailAndPassword, sendEmailVerification, updateCurrentUser, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import auth from "../../Firebase/..Firebase .config";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
const Register = () => {
  const [registererror, setregistrationerror] = useState("");
  const [sucess, setscucess] = useState("");
  const [showpassword, setshowpassword] = useState();
  const handaleRegister = (e) => {
    e.preventDefault();
    console.log("form submiting");
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accept=e.target.terms.checked
    console.log(name,email, password,accept);
    // reset error
    setregistrationerror("");
    //reset success
    setscucess("");
    if (password.length < 6) {
      setregistrationerror(
        "Password Should be at least 6 character or longer "
      );
    } else if (!/[A-z]/.test(password)) {
      setregistrationerror(
        "your password should have at least one upper case character"
      );
      return;
    }
    else if(!accept){
      setregistrationerror("Please Accept Our terms and Condition")
      return
    }

    // create user
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result.user);
       setscucess("user Create successfully");
      // update Profile
      updateProfile(result.user,{
        displayName:name,
          photoURL:"https://example.com/jane-q-user/profile.jpg"
      })
      .then(()=>console.log("profile update Successfully"))
      .catch(error=>console.log(error))
        // Send Verification email
        sendEmailVerification(result.user)
        .then(()=>{
          alert('please check your email and verify the email')
        })
      })
      .catch((error) => {
        console.error(error);
        setregistrationerror(error.message);
      });
  };
  return (
    <div className="border">
      <h1>Register Page</h1>
      <div className="mx-auto md:w-1/2">
        <h1 className="text-center">Please Register</h1>
        <form onSubmit={handaleRegister} className="justify-center ">
          <input
            placeholder=" Your Name"
            className="bg-gray-300 mb-3 px-2 py-2 w-full text-black"
            type="text"
            name="name"
            id=""
            required
          />
          <input
            placeholder=" Email Address"
            className="bg-gray-300 mb-3 px-2 py-2 w-full text-black"
            type="email"
            name="email"
            id=""
            required
          />

          <br />
          <div className="relative border">
            <input
              placeholder="Password"
              className="bg-gray-300 relative px-2 py-2 w-full text-black"
              type={showpassword ? "text" : "password"}
              name="password"
              id=""
            />
            <span
              className="absolute top-2 right-2"
              onClick={() => setshowpassword(!showpassword)}
            >
              {showpassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
            </span>
          </div>
          <br />
        
          <br />
          <input
            className="btn btn-secondary  w-full text-black"
            type="submit"
            value="Register"
          />
        </form>
        {registererror && (
          <p className="text-red-700 text-center">{registererror}</p>
        )}
        {sucess && <p className="text-green-700 text-center">{sucess}</p>}
        <p>Already have a Account?Go to <a className="text-green-700" href=""><Link to="/login">Login</Link></a></p>
      </div>
    </div>
  );
};

export default Register;
