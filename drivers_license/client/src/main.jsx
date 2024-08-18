import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import Read from './pages/Read.jsx';
import App from './App.jsx';
import SingUp from './pages/Singup.jsx';
import Login from './pages/Login.jsx';
import LicenseFile from './pages/LicenseFile.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <SingUp/>,
  },
  {
    path: "login",
    element: <Login/>
  },
  {
    path: "license",
    element: <LicenseFile/>
  },
  {
    path: "read",
    element: <Read/>
  }

  
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
