import { Info } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect, useState } from "react";
import Link from "next/link";
import UserCard from "./UserCard";
import axios from "axios";
import "@/app/styles/components/rightSideBar.css";
import { data } from "@/app/beebomco";

const RightSideBar = async (params: { username: string }) => {
  // const data = await axios
  //   .get(`http://127.0.0.1:8000/${params.username}`)
  //   .then(function (response) {
  //     return response.data;
  //   });

  // const media = data.media.data;


  return (
    <div className="rightsidebar">
      <div className="topleft">
        <Info sx={{ fontSize: 40, color: grey["500"] }} />
        <Avatar
          src={data.profile_picture_url}
          alt="not found"
          sx={{ width: 50, height: 50 }}
        />
      </div>
      <div className="info">
        <Avatar
          src={data.profile_picture_url}
          alt="not found"
          sx={{ width: 200, height: 200 }}
        />

        <h1>{data.name}</h1>
        <Link href={`https://www.instagram.com/${data.username}/`}>
          <p>@{data.username}</p>
        </Link>
      </div>
    </div>
  );
};

export default RightSideBar;
