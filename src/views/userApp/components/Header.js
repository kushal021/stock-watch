import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SwLogo from "../../../assets/brand/swLogo.jpg";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  console.log("locatin=====>", location);
  return (
    <>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light shadow-none">
          {/* <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">
            Stock Watch
          </a> */}
          <div className="container-fluid">
            <a className="navbar-brand fw-bold" href="/">
              <img src={SwLogo} alt="stock watch" width="100px" height="40px" />
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
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/" && "nav-active"
                    } `}
                    to="/"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/stocks" && "nav-active"
                    } `}
                    to="/stocks"
                  >
                    Stocks
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/account" && "nav-active"
                    } `}
                    to="/account"
                  >
                    Account
                  </Link>
                </li>
              </ul>
              {/* <button
                className="btn btn-outline-dark fw-bold"
                onClick={() => navigate("/login")}
              >
                Login
              </button> */}

              <button
                className="btn btn-mod btn-border btn-circle btn-medium"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
