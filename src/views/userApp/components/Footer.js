import React from "react";
import SwLogo from "../../../assets/brand/swLogo.jpg";
import CIcon from "@coreui/icons-react";
import {
  cibGmail,
  cibMailRu,
  cibMailchimp,
  cibProtonmail,
} from "@coreui/icons";

const Footer = () => {
  return (
    <footer>
      <div className="footer-main">
        <div className="footer-content">
          <div className="footer-logo">
            <img src={SwLogo} alt="stock watch" width="100px" height="40px" />
          </div>
          <div className="footer-links">
            <ul>
              <li>
                {/* <a href="#">
                  <img
                    src="https://rvs-chirp-landing-page.vercel.app/Assets/Twitter-Black.svg"
                    alt=""
                  />
                </a> */}

                <CIcon icon={cibGmail} />
              </li>
              <li>ssdagwar@gmail.com</li>
              {/* <li>
                <a href="#">Terms of Use</a>
              </li> */}
            </ul>
          </div>
        </div>
        <div className="footer-text">
          &copy; <span id="c_year">2023</span> Stock watch.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
