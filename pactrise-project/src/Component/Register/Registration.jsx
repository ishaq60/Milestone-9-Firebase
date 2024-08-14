import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import auth from "../../Firebase/Firebase.config";
import { FaEyeSlash } from "react-icons/fa6";
import { IoEyeSharp } from "react-icons/io5";

const Registration = () => {
  const [registration, setrefistration] = useState("");
  const [error, seterror] = useState("");
  const [password, showpassword] = useState();
  const handaleRegister = (e) => {
    e.preventDefault();
    console.log("Register");
    const email = e.target.email.value;
    const password = e.target.password.value;
    const accept=e.target.terms.checked;
    console.log(email, password);
    seterror("");
    setrefistration("");

    if (!password.length > 6) {
      seterror("you must be password least 6 character");
      return;
    } else if (!/[A-z]/.test(password)) {
      seterror("You need least capital letter");
      return;
    }
    else if(!accept){
      seterror("You Need Accept terms and Condition")
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const user = result.user;

        console.log("User Create Successfully");
        setrefistration("User Create Successfully");
      })
      .catch((error) => {
        console.error(error);
        seterror(error.message);
      });
      
  };
  sendEmailVerification(auth.currentUser)
  .then(()=>{
    alert("email verification send your email")
  })
  return (
    <div>
      <div>
        <h1 className="text-center">Register Page</h1>
        <h1 className="text-3xl text-center">Please Register</h1>
        <div className=" border py-5 p-5 mx-auto md:w-1/2">
          <form onSubmit={handaleRegister}>
            <input
              className="border-gray-300 w-full bg-gray-100 px-2 py-2"
              type="email"
              placeholder="Email"
              name="email"
              id=""
            />
            <br />
            <div className="relative ">
              <input
                className="border-gray-300 relative w-full mt-2 px-2 py-2 bg-gray-200"
                type={password ? "text" : "password"}
                placeholder="Password"
                name="password"
                id=""
              />
              <br />
              <div>
                <input type="checkbox" name="terms" id="" />
                <label htmlFor="">Plz Accept Our Term and Condition</label>
              </div>
              <span
                onClick={() => showpassword(!password)}
                className="absolute top-4 right-2"
              >
                {password ? (
                  <FaEyeSlash></FaEyeSlash>
                ) : (
                  <IoEyeSharp></IoEyeSharp>
                )}
              </span>
            </div>

            <input
              className="btn w-2/3 mt-2 btn-primary"
              type="submit"
              value="Submit"
            />
          </form>

          {registration && <p className="text-green-500">{registration}</p>}
          {seterror && <p className="text-red-700">{error}</p>}
          <h1>
            You have a Account? plz{" "}
            <Link to="/login">
              <span className="text-green-700">Login</span>
            </Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Registration;
