import "bootstrap/dist/css/bootstrap.min.css"
import Singup from './pages/Singup'
import Login from "./pages/Login"
import {BrowserRouter, Routes, Route} from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Singup/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
      <div>
        <Singup/>
      </div>
      
    </>
  )
}

export default App
