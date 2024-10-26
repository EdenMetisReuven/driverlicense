
//import './App.css'
import HomePage from './pages/homePage/HomePage.tsx'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";
import SingUp from './pages/signin/Singin.tsx';
import Login from './pages/login/Login.tsx';
import NewPost from './pages/newPost/NewPost.tsx';

function App() {
  const router = createBrowserRouter([

    {
      path: "/",
      element: <SingUp/>
    },
    {
      path: "/login",
      element: <Login/>
    },
    {
      path: "newPost",
      element: <NewPost/>
    },
    {
      path: "home",
      element: <HomePage/>
    }
  ]);
  
  createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
  )
}

export default App
