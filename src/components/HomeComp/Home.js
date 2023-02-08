/* 
File Created:07.02.2023
Author: R.Sunny
*/
import React, { lazy } from "react";
import TopBanner from "./../../pages/TopBanner/TopBanner";

// components or pages

const Home = () => {
  return (
    <>
      <div className="home_page">
        <div className="container">
          {/* Top Banner Section */}
          <div className="pb-7">
            <TopBanner />
          </div>

          {/* To-let section */}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default Home;
