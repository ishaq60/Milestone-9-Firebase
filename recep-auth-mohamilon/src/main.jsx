import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Navbar from './Components/Navbar.jsx';
import Login from './Components/Login.jsx';
import Register from './Components/Register.jsx';
import AuthProvide from './AuthProvide.jsx';

import Orders from './Components/Orders.jsx';
import Profile from './Components/Profile.jsx';
import PrivateRoutes from './Components/PrivateRoutes.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/navbar",
        element:<Navbar></Navbar>
      },
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/orders",
        element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path:"/profile",
        element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvide>
<RouterProvider router={router} />
</AuthProvide>
  </React.StrictMode>,
)
