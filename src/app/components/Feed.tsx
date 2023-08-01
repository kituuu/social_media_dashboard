import { Avatar } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
const Feed = (params: any) => {
  return (
    <div className="feed">
      <Avatar src={params.profileimage} sx={{ width: 60, height: 60 }} />

      <div className="feedcontent">
        <a href={params.permaurl}>
          <h1>{params.message}</h1>
        </a>

        <p>{params.timemessage}</p>
      </div>
    </div>
  );
};

export default Feed;
