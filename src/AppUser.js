import React, { Component, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import Login from "./views/userApp/auth/login";
import Index from "./views/userApp";
import Register from "./views/userApp/auth/register";
import Header from "./views/userApp/components/Header";
import OneStock from "./views/userApp/pages/oneStock";
import CompanyList from "./views/userApp/pages/companyList";
import Footer from "./views/userApp/components/Footer";
import StrategyList from "./views/userApp/pages/stratgyList";
import ForgotPassword from "./views/userApp/auth/forgotPassword";
import ResetPassword from "./views/userApp/auth/resetPassword";
import News from "./views/userApp/pages/news";
import AboutUs from "./views/userApp/pages/aboutUs";

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
      <Header />
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/forgot-password" element={<ForgotPassword />} />
        <Route exact path="/reset-password" element={<ResetPassword />} />
        <Route exact path="/" element={<Index />} />
        <Route exact path="/strategy/:id" element={<StrategyList />} />
        <Route exact path="/stocks" element={<CompanyList />} />
        <Route exact path="/news" element={<News />} />
        <Route exact path="/about-us" element={<AboutUs />} />
        {/* <Route exact path="/stocks/:strategyId" element={<CompanyList />} /> */}
        <Route
          exact
          path="/stocks/:strategyId/:stockId"
          element={<OneStock />}
        />
        {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
      </Routes>
      <Footer />
    </>
  );
};

export default AppUser;
