import React from "react";
import { NavLink } from "react-router-dom";
import { HiArrowNarrowRight, HiOutlineDotsVertical } from "react-icons/hi";

const TopBanner = () => {
  return (
    <>
      <div className="top_banner_page">
        <div className="container">
          <div className="banner_img">
            {/* <img src="/images/topbanner/sample.jpg" alt="" /> */}
            <img className="" src="/images/topbanner/sample.jpg" alt="" />
          </div>
          {/* Headline Important Linkup */}
          <div className="flex justify-between items-center py-4 ">
            <div className="flex justify-center items-center gap-2">
              <NavLink to="/login">
                <span className="text-xl ">Post a To-Let</span>
              </NavLink>{" "}
              <HiArrowNarrowRight />
            </div>

            <HiOutlineDotsVertical />

            <div className="flex justify-center items-center gap-2">
              <NavLink to="/login">
                <span className="text-xl center">
                  Login to Camp Manager Account
                </span>
              </NavLink>
              <HiArrowNarrowRight />
            </div>

            <HiOutlineDotsVertical />

            <div className="flex justify-center items-center gap-2">
              <NavLink to="/login">
                <span className="text-xl center">Become Camp Member</span>
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
