import React, { Component, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import Login from "./views/userApp/auth/login";
import Index from "./views/userApp";
import Register from "./views/userApp/auth/register";

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
        <Route exact path="/" element={<Index />} />
        {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
      </Routes>
    </>
  );
};

export default AppUser;
