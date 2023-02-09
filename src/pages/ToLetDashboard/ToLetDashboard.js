import React from "react";
import "./ToLetDashboard.scss";
import ToLetSearch from "../ToLetSearch/ToLetSearch";
import ToLetSearchResult from "../ToLetSearchResult/ToLetSearchResult";

const ToLetDashboard = () => {
  return (
    <>
      <div className="_to_let_dashboard_page">
        
          <div className="_t_dash_container">
            <ToLetSearch />
            <ToLetSearchResult />
  
        </div>
      </div>
    </>
  );
};

export default ToLetDashboard;
