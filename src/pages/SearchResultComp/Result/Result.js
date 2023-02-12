import React from "react";
import FilterOption from "../FilterOption/FilterOption";
import SearchResult from "../SearchResult/SearchResult";
import "./Result.scss";
const Result = () => {
  return (
    <>
      <div className="search_result_page">
        <div className="container">
          <div className="page_content">
            <div className="filter_option">
              <FilterOption />
            </div>
            <div className="filter_option">
              <SearchResult />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Result;
