import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import SwLogo from "../../../assets/brand/swLogo.jpg";
import CIcon from "@coreui/icons-react";
import { cilUser } from "@coreui/icons";
import { CDropdown, CDropdownMenu, CDropdownToggle } from "@coreui/react";
import "../../../scss/header.scss";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [isToken, setIsToken] = useState(null);
  const [test, setTest] = useState();

  console.log("locatin=====>", isToken);

  const logout = () => {
    localStorage.clear();
    setIsToken();
    navigate("/login");
  };

  useEffect(() => {
    const token = localStorage.getItem("uID");
    const userData = JSON.parse(localStorage.getItem("userData"));
    const userObj = {
      token,
      userData,
    };
    setIsToken({ ...userObj });
  }, [location]);
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
                {/* <li className="nav-item">
                  <Link
                    className={`nav-link ${
                      location.pathname === "/account" && "nav-active"
                    } `}
                    to="/account"
                  >
                    Account
                  </Link>
                </li> */}
              </ul>
              {/* <button
                className="btn btn-outline-dark fw-bold"
                onClick={() => navigate("/login")}
              >
                Login
              </button> */}
              {!isToken?.token ? (
                <button
                  className="btn btn-mod btn-border btn-circle btn-medium"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              ) : (
                <>
                  <CIcon icon={cilUser} size="xl" />
                  <CDropdown className="mobile_drop_query m-2">
                    <CDropdownToggle
                      color="ghost"
                      className="nav-link text-start"
                    >
                      {/* <CIcon icon={cilHamburgerMenu}></CIcon> */}
                      {isToken?.userData?.fName}
                      {console.log("ffffffffff", isToken?.userData)}
                      <CDropdownMenu>
                        {/* <NavLink
                          className={"nav-drop dropdown-item"}
                          to={"/dashboard"}
                          // onClick={() => setVisible(false)}
                        >
                          Dashboard
                        </NavLink> */}

                        <div
                          onClick={logout}
                          className={"nav-drop dropdown-item"}
                        >
                          Logout
                        </div>
                        {/* {isToken ? (
                        <>

                        </>
                      ) : (
                        <>
                          <a
                            onClick={() => setLoginModal(!loginModal)}
                            className={"nav-drop dropdown-item"}
                          >
                            Login
                          </a>
                        </>
                      )} */}
                      </CDropdownMenu>
                    </CDropdownToggle>
                  </CDropdown>
                </>
              )}

              {/* <button
                className="btn btn-mod btn-border btn-circle btn-medium"
                onClick={() => navigate("/login")}
              >
                Logout
              </button> */}
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;
