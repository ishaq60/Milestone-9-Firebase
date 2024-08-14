import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import UseAuth from '../UseAuth';

const Navbar = () => {
  const Links =<>
   
     <li><NavLink to="/" >Home</NavLink></li>
     <li><NavLink to="/about" >About</NavLink></li>
     <li><NavLink to="/contact" >Contact</NavLink></li>
     <li><NavLink to="/register" >Register</NavLink></li>
     <li><NavLink to="/product" >Product</NavLink></li>
  
     
        
       
    </>
    const  {logOut,user}=UseAuth()
    console.log(user);

    return (
        <div><div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow">
          {Links}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Glasses</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-2">
           {Links}
          </ul>
        </div>
        
        <div className="navbar-end">
          {
            user?.email? <div>
               <div className='flex gap-3'>
               <p>{user.email}</p>
                <button onClick={logOut}>LogOut</button>
               </div>
            </div>
            :
            <Link to="/login" className="btn btn-primary">Login</Link>
          }
         
        </div>
      </div>
        </div>
    );
};

export default Navbar;