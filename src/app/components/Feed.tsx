import React from "react";
import { Avatar } from "@mui/material";
import Image from "next/image";
const Feed = (params: any) => {
  return (
    <div className="feed">
      <Avatar src={params.profileimage}  sx={{ width: 60, height: 60 }}/>
      <div className="content">
        <h1>
          <span>
            @{params.username} {params.message}
          </span>
        </h1>
        <p>{params.timemessage}</p>
      </div>
      <Image src={params.media} width={60} height={60} alt="not found"/>
    </div>
  );
};

export default Feed;
