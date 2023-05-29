import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            Stock Watch
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Stocks
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  Account
                </a>
              </li>
            </ul>
            <button
              className="btn btn-outline-dark fw-bold"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
