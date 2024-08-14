import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Register from '../Register/Register';

const Root = () => {
    return (
        <div>
            <Header></Header>
          
           <Outlet></Outlet>
        </div>
    );
};

export default Root;