// Author: R.sunny ==>8 Feb 2023

import React from "react";
import { NavLink } from "react-router-dom";
import "./LoginDashboard.scss";
import { Button } from "@material-ui/core";
import { HiArrowRight } from "react-icons/hi";

const LoginDashboard = () => {
  return (
    <>
      <div className="login_dashboard_page">
        <div className="container">
          {" "}
          <div className="component_header">
            {/*----tagline*/}

            <NavLink className="anc_text" to="/">
              Bachelor Camp : Its a complete solution for all even Your are
              Married
            </NavLink>

            {/* Headline */}
            <div className="login_section">
              <h1 className="tag_text">Log In</h1>
              <span className="innersubtitle">Or create new account</span>

              {/* button Link */}
              <div style={{ marginTop: "15px" }}>
                <NavLink className="login_btn" to="/login">
                  <Button className="btn_color" variant="contained">log in</Button>
                </NavLink>

                <NavLink className="reg_btn" to="/">
                  <Button variant="contained">Create New Account</Button>
                </NavLink>
              </div>

              {/* Others Important Link */}

              <div className="others_link">
                <span className="__head_text"> Or would you like to </span>
                <div className="other_comp_link">
                  <ul>
                    <li>
                      <hr style={{ width: "90%" }} />
                      <NavLink to="/">
                        <div className="inner_comp">
                          <span className="innersubtitle">See To-Let Posts</span>
                          <HiArrowRight />
                        </div>
                        <span>
                          You will either need the billing account number and
                          the patient's date of birth or the guarantor ID to
                          make a payment.
                        </span>
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginDashboard;
