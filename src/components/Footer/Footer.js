import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";

const Footer = () => {
  return (
    <>
      <div className="footer_page">
        <div className="container">
          {/* Footer text */}
          <div>
            <span className="footer_text">StayIn</span> <br />
            <span className="footer_text">touch with</span> <br />
            <span className="footer_text">BachelorCamp</span>
          </div>
          <hr className="mt-2" />

          {/* Important Link */}
          <div className="important_link">
            <NavLink to="/">FAQ</NavLink>
            <NavLink className="ml-3" to="/">
              Blog
            </NavLink>
            <NavLink className="ml-3" to="/">
              Contact
            </NavLink>
            <NavLink className="ml-3" to="/">
              Privacy
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
