import { Search } from "@mui/icons-material";
import React from "react";
import Analyticscard from "./Analyticscard";
import axios from "axios";
// import { data } from "@/app/beebomco";
import "@/app/styles/components/dashboardTop.css";
import "@/app/styles/components/analytics.css";

const Dashboardtop = async(params: { username: string }) => {
  const data = await axios
    .get(`http://127.0.0.1:8000/${params.username}`)
    .then(function (response) {
      return response.data;
    })

  return (
    <div className="dashboardtop">
      <div className="dashandsearch">
        <div className="dash">
          <h1>Dashboard</h1>
          <p>Hello, {data.name}, Welcome to Buzzboard</p>
        </div>
        <div className="search">
          <div className="searchinp">
            <input type="text" placeholder="Search" />
          </div>
          <div className="searchbtn">
            <Search sx={{ fontSize: 40 }} />
          </div>
        </div>
      </div>
      <div className="analytics">
        <Analyticscard title="Total Posts" data={data.media_count} id="1" />
        <Analyticscard title="Following" data={data.follows_count} id="2" />
        <Analyticscard title="Followers" data={data.followers_count} id="3" />
      </div>
    </div>
  );
};

export default Dashboardtop;
