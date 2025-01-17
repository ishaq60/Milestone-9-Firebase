import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home.jsx';
import Login from './Component/Login/Login.jsx';
import Registration from './Component/Register/Registration.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path:"/login",
    element:<Login></Login>
  },
  {
    path:"/register",
    element:<Registration></Registration>
  }
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
