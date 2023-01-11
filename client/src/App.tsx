import React from 'react';
import Home from "./Components/Home"
import Register from "./Components/Register"
import Login from "./Components/login"
import Forgetpassword from "./Pages/Forgetpassword"
import Navbar from "./Components/Navbar/Navbar"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  return (
    <Router>
        <Navbar /> 
        
        <Routes>

          <Route  path="/" element={<Home />} />
          <Route  path="/register" element={<Register />} />
          <Route  path="/login" element={<Login />} />
          <Route  path="/resetpassword" element={<Forgetpassword />} />

        </Routes>
      </Router>
  );
}

export default App;
