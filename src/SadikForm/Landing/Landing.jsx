import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ForgetPassword from "../ForgetPassword";
import Login from "../Login";
import Registration from "../Registration";

const Landing = () => {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="register" element={<Registration />} />
          <Route path="forget" element={<ForgetPassword />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
};

export default Landing;
