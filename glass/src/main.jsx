import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Root/Root.jsx';
import Home from './Home/Home.jsx';
import Register from './Pages/Register.jsx';
import Contact from './Pages/Contact.jsx';
import About from './Pages/About.jsx';
import Login from './Pages/Login.jsx';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider.jsx';
import Product from './Pages/Product.jsx';
import Private from './PrivateRoute/Private.jsx';
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
        path:"/Contact",
        element:<Contact></Contact>
      }
      ,{
        path:"/about",
        element:<About></About>
      },
      {
        path:"/product",
        element:<Private>
          <Product></Product>
        </Private>
      },
      {
        path:"/register",
        element:<Register/>
      },
      {
        path:"/login",
        element:<Login></Login>
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
<FirebaseProvider>
<RouterProvider router={router} />
</FirebaseProvider>
  </StrictMode>,
)
