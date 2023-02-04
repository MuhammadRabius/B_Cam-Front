import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  const isSignIn = () => {
    return (
      <>
        <li>
          <Link to="/login">Sign In</Link>
        </li>
      </>
    );
  };

  return (
    <>
      <div className="header_page">
        <div className="container">
          <div className="wrapper">
            {/* logo  */}
            <div className="logo">
              <h1>
                <Link to="/">Bachelor Camp</Link>
              </h1>
            </div>

            {/* menu  */}
            <div className="nav__menu">
              <ul>{isSignIn()}</ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
