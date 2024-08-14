import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,loading}=useContext(AuthContext)
    const location=useLocation()
    if(loading){
      return  <p text-4xl>Loading</p>
    }
    if(!user){
        return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>
    }
  else{
    <Navigate to="/"></Navigate>
  }
    return (
        <div>
        {children}    
        </div>
    );
};

export default PrivateRoutes;