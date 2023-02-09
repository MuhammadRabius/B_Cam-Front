import React, { useState } from "react";
import Select from "@mui/material/Select";
import { FormControl, InputLabel, MenuItem } from "@mui/material";
import "./ToLetSearch.scss";

const ToLetSearch = () => {
  const initVal = {
    city: "",
    area: "",
    category: "",
  };
  const [data, setData] = useState(initVal);

  console.log("data", data);
  const handlChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleToletFormSearch = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="search_page">
        <h1>
          We’ll help you to <br /> get better, feel better and stay better{" "}
          <span style={{ color: "#80b636" }}>HOME</span>{" "}
          <hr
            style={{ background: "#8DC63F", height: "6px", marginTop: "10px" }}
          />
        </h1>
        <div className="search_form">
          <form action="" onSubmit={handleToletFormSearch}>
            <div className="_form_group">
              <InputLabel>Select Your City</InputLabel>
              <Select
                className="_select_group"
                name="city"
                id="city"
                onChange={handlChange}
              >
                <MenuItem value="Dhaka">Dhaka</MenuItem>
                <MenuItem value="Chottogram">Chottogram</MenuItem>
              </Select>
            </div>

            <div className="_form_group">
              <InputLabel>Select Area</InputLabel>
              <Select
                className="_select_group"
                name="area"
                id="area"
                onChange={handlChange}
              >
                <MenuItem value="#"></MenuItem>
                <MenuItem value="Zigatola">Zigatola</MenuItem>
                <MenuItem value="Uttara">Uttara</MenuItem>
                <MenuItem value="Framgate">Framgate</MenuItem>
              </Select>
            </div>

            <div className="_form_group">
              <InputLabel>Select Category</InputLabel>
              <Select
                className="_select_group"
                name="category"
                id="category"
                onChange={handlChange}
              >
                <MenuItem value="#"></MenuItem>
                <MenuItem value="Family">Family</MenuItem>
                <MenuItem value="Bachelor">Bachelor</MenuItem>
                <MenuItem value="SubLet">SubLet</MenuItem>
              </Select>
            </div>

            <div lassName="_form_group">
              <button className="btn_submit" type="submit">
                Search
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default ToLetSearch;
