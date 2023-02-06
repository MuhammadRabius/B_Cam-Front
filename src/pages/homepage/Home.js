/* 
File Created:3.2.2023
Author: Mahmudur Rahman
*/
import React, { lazy } from "react";
import TopBanner from "./TopBanner/TopBanner.js";

// components or pages

const Home = () => {
  return (
    <>
      <div className="home_page">
        <div className="container">
          <div className="__top_banner">
            <TopBanner />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
