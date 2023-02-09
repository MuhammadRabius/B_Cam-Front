import { Button } from "@material-ui/core";
import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

const Header = () => {
  // Bachelor Sing In -----------------------
  const isSignIn = () => {
    return (
      <>
        <li>
          <Link to="/login-dashboard">
            <Button className="btn_group" variant="contained">
              Log In
            </Button>
          </Link>
        </li>
      </>
    );
  };

  return (
    <>
      <div className="header_page">
        <div className="container">
          <div className="flex justify-between items-center">
            {/* logo  */}
            <div className="logo">
              <h1>
                <Link to="/">
                  <img
                    className="w-52"
                    src="/images/logo/Bechelor_camp_logo.png"
                    alt="logo"
                  />
                </Link>
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
