import ChangePass from "./pages/changePass/ChangePass";
import ChangePass2 from "./pages/changePass/ChangePass2";
import Error404 from "./pages/error404/Error404";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Verify from "./pages/verify/Verify";
import "./App.css";
import SignUp from "./pages/signUp/signUp";
import Login from "./pages/login/login";
import Loggin from "./pages/onboarding/Loggin";
import Signupp from "./pages/onboarding/Signupp";
import Homepage from "./pages/homepage/Homepage";
import RoutesDashBoard from "./pages/Dashboard/Routes";
// import React from 'react';

function App() {
  return (
    <>
      <BrowserRouter>
        <ToastContainer
          theme="dark"
          position="top-right"
          autoClose={3000}
          closeOnClick
          pauseOnHover={false}
        />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/changePassword" element={<ChangePass />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loggin" element={<Loggin />} />
          <Route path="/signupp" element={<Signupp />} />
          <Route path="*" element={<Error404 />} />
          <Route path="/changePasswordConfirm" element={<ChangePass2 />} />
          <Route path="/dashboard/*" element={<RoutesDashBoard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
