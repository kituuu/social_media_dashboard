import { Avatar } from "@mui/material";
import Link from "next/link";

const UserCard = (params: any) => {
  return (
    <div className="usercard">
      <Avatar
        src={params.profileimage}
        alt="not found"
        sx={{ width: 40, height: 40 }}
      />
      <div className="info">
        <h1>{params.name}</h1>
        <p>@{params.username}</p>
      </div>
    </div>
  );
};

export default UserCard;
