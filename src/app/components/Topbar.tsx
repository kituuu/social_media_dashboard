import { Search } from "@mui/icons-material";
import React from "react";
import axios from "axios";
import { data } from "@/app/beebomco";

const Topbar = async (params: { username: string }) => {
  // const data = await axios
  //   .get(`http://127.0.0.1:8000/${params.username}`)
  //   .then(function (response) {
  //     return response.data;
  //   });

  return (
    <div className="dashboardtop">
      <div className="dashandsearch">
        <div className="dash">
          <h1>Dashboard</h1>
          <p>Hello, {data.name}, Welcome to Buzzboard</p>
        </div>
        <div className="search">
          <input type="text" placeholder="Search" />
          <button type="submit">
            <Search className="searchbtn" sx={{ fontSize: 40 }} />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
