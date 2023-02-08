import React from "react";
import { NavLink } from "react-router-dom";
import { HiArrowNarrowRight, HiOutlineDotsVertical } from "react-icons/hi";
import "./TopBanner.scss";

const TopBanner = () => {
  return (
    <>
      <div className="top_banner_page">
        <div className="">
          <div className="banner_img">
            {/* <img src="/images/topbanner/sample.jpg" alt="" /> */}
            <img
              src="/images/topbanner/sample.jpg"
              alt="bachelor camp banner"
            />
          </div>
          {/* Headline Important Linkup */}
          <div className="important_headline_link">
            <div className="important_link_group">
              <NavLink to="/logindashboard">
                <span className="link_text">Post a To-Let</span>
              </NavLink>{" "}
              <HiArrowNarrowRight />
            </div>

            <HiOutlineDotsVertical />

            <div className="important_link_group">
              <NavLink to="/logindashboard">
                <span className="link_text">Login to Camp Manager Account</span>
              </NavLink>
              <HiArrowNarrowRight />
            </div>

            <HiOutlineDotsVertical />

            <div className="important_link_group">
              <NavLink to="/logindashboard">
                <span className="link_text">Become Camp Member</span>
              </NavLink>
              <HiArrowNarrowRight />
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
};

export default TopBanner;
