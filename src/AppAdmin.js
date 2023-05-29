import React, { Component, Suspense } from "react";
import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import LoginPage from "./views/pages/login/Login";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

// Containers
const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Pages
const Page404 = React.lazy(() => import("./views/pages/page404/Page404"));
const Page500 = React.lazy(() => import("./views/pages/page500/Page500"));

const AppAdmin = () => {
  return (
    <Suspense fallback={loading}>
      <Routes>
        <Route path="/login" name="Login Page" element={<LoginPage />} />
        {/* <Route path="/register" name="Register Page" element={<Register />} /> */}
        {/* <Route path="/500" name="Page 500" element={<Page500 />} /> */}
        <Route path="/" element={<Navigate replace to="/admin/dashboard" />} />
        <Route path="/*" name="Home" element={<DefaultLayout />} />
        <Route path="*" name="Page 404" element={<Page404 />} />
      </Routes>
    </Suspense>
  );
};

export default AppAdmin;
