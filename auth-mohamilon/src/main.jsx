import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root.jsx';
import Home from './Components/Home.jsx';
import Login from './Components/Login.jsx';
import Registration from './Registration.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import Orders from './Components/Orders.jsx';
import PrivateRoutes from './Routes/PrivateRoutes.jsx';
import Profile from './Components/Profile.jsx';
import Dashbord from './assets/Dashbord.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      }
      ,
      {
        path:"/login",
        element:<Login></Login>
      },
      {
        path:"/registration",
        element:<Registration></Registration>
      },
      {
     path:"/order",
     element:<PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path:'/profile',
        element:<PrivateRoutes><Profile></Profile></PrivateRoutes>
      },
      {
        path:"/dashbord",
        element:<PrivateRoutes><Dashbord></Dashbord></PrivateRoutes>
      }
    ]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <AuthProvider>
 <RouterProvider router={router} />
 </AuthProvider>
  </React.StrictMode>,
)
