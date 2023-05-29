import React, { Component, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./scss/style.scss";
import AppAdmin from "./AppAdmin";
import AppUser from "./AppUser";

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={loading}>
        <Routes>
          {/* <Route path="/login" name="Login Page" element={<LoginPage />} /> */}
          <Route path="/*" exact element={<AppUser />} />
          {/* <Route path="/" element={<Navigate replace to="/login" />} /> */}
          <Route
            exact
            path="/admin/*"
            name="Admin dashboard"
            element={<AppAdmin />}
          />
          <Route
            exact
            path="*"
            name="Not found"
            element={
              <>
                <h1>No routes!</h1>
              </>
            }
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
