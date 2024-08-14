import React, { useContext, useState } from 'react';
import { AuthContext } from '../AuthProvide';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const {signIn,googleSignIn}=useContext(AuthContext)
    const [success,setsuccess]=useState("")
    const navigate=useNavigate()
    const handelsubmitted=e=>{
        e.preventDefault()
        const email=e.target.email.value;
        const password=e.target.password.value
            signIn(email,password)
            .then(result=>{
               console.log(result.user);
               setsuccess("user Sigin successfully");
               e.target.reset()
               navigate("/")
            })
            .catch(error=>{
                console.error(error)
            })
        console.log("from submitted");
        
      
    }
    const handaleGoogle=e=>{
    
e.preventDefault()
googleSignIn()
then(result=>{
    console.log(result.user);
})
.then(error=>{
    console.error(error)
})

    }
    return (
        <div>
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center t">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handelsubmitted}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" name="email" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" name="password" className="input input-bordered" />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">LogIn</button>
                            </div>
                        </form>
                      
                    <a className='justify-center' href="\"><button onClick={handaleGoogle} className='btn btn-ghost justify-center'>GoogleLogin</button></a>
                    </div>
                    {
                        success&& <p className=' text-green-600'>{success}</p>
                    }
                </div>
            </div>
        </div>
    </div>
    );
};

export default Login;