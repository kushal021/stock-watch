import React, { Component, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import Register from "./views/pages/register/Register";
import Login from "./views/userApp/auth/login";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Pages
// const Login = React.lazy(() => import("./views/pages/login/Login"));

const AppUser = () => {
  return (
    //  <Suspense fallback={loading}>
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
      </Routes>
    </>
  );
};

export default AppUser;
