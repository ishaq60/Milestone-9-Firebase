import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './COMPONENTS/Root/Root.jsx';
import Header from './COMPONENTS/Header/Header.jsx';
import Login from './COMPONENTS/Login/Login.jsx';
import Home from './COMPONENTS/Home.jsx';
import Register from './COMPONENTS/Register/Register.jsx';
import HeroRegister from './COMPONENTS/HeroRegister/HeroRegister.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children:[
      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/header",
        element:<Header></Header>
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
        path:"/heroregister",
        element:<HeroRegister></HeroRegister>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
 <RouterProvider router={router} />
  </React.StrictMode>,
)
