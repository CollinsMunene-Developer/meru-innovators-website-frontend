import React from "react";
import Home from "./pages/users/Home/Home";
import { BrowserRouter, Routes,Route } from "react-router-dom";
import Signup from "./pages/authentication/signup/Signup";
import Login from "./pages/authentication/login/Login";
import ForgetPassword from "./pages/authentication/ForgetPassword/ForgetPasswors";
import EmailVeification from "./pages/authentication/EmailVerification/EmailVeification";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/forget-password" element={<ForgetPassword/>}/>
        <Route path="/email-verification" element={<EmailVeification/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
