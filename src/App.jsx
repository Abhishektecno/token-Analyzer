import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import AboutUs from "./pages/About";
import Appointment from "./pages/Appointment";
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  return( 
  <>
   <Router>
     <Routes>
       <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/register' element={<Register/>} />
        <Route path='/about' element={<AboutUs/>} />
        <Route path='/appointment' element={<Appointment/>} />
     </Routes>    
     <ToastContainer position="top-center"/>
  </Router>
  </>
  )
}
export default App;
