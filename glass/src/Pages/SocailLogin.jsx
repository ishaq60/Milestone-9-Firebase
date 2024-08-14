import React from 'react';
import { FaGoogle,FaGithub } from "react-icons/fa6";
import UseAuth from '../UseAuth';
const SocailLogin = () => {
    const {googleLogin,GithubLogin}=UseAuth()
    
  
    return (
        <div className='px-2 mr-3 gap-4 flex'>
       <div>
        <button onClick={()=>googleLogin()}> <FaGoogle></FaGoogle>  </button>
      
       </div>
       <div>
       <button onClick={()=>GithubLogin()}> <FaGithub></FaGithub>  </button>
       </div>
        </div>
    );
};

export default SocailLogin;