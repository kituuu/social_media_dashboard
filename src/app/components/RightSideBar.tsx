'use client'
import AllInboxIcon from "@mui/icons-material/AllInbox";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  BugReport,
  BugReportOutlined,
  EventAvailable,
  Info,
  Settings,
  SlowMotionVideo,
} from "@mui/icons-material";
import { Avatar } from "@mui/material";
import { grey } from "@mui/material/colors";
import { useEffect , useState} from "react";
import Link from "next/link";
import UserCard from "./UserCard";

const userfollows = [
  {
    name: "Karthik Ayagar",
    username: "ayangarkarthik",
    profileimage:
      "https://scontent.fbek1-3.fna.fbcdn.net/v/t51.2885-15/336299856_114987438146562_6557615572862936344_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=86c713&_nc_ohc=O7umoiV5kAQAX8KHLnY&_nc_ht=scontent.fbek1-3.fna&edm=AL-3X8kEAAAA&oh=00_AfAyAVtSzuY_r34CuGJ-XXMKAcKnuCMT_eFubW3IoLch-w&oe=64B7FE05",
  },
  {
    name: "Karthik Ayagar2",
    username: "ayangarkarthik",
    profileimage:
      "https://scontent.fbek1-3.fna.fbcdn.net/v/t51.2885-15/336299856_114987438146562_6557615572862936344_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=86c713&_nc_ohc=O7umoiV5kAQAX8KHLnY&_nc_ht=scontent.fbek1-3.fna&edm=AL-3X8kEAAAA&oh=00_AfAyAVtSzuY_r34CuGJ-XXMKAcKnuCMT_eFubW3IoLch-w&oe=64B7FE05",
  },
];
const userfollowers = [
  {
    name: "Karthik Ayagar",
    username: "ayangarkarthik",
    profileimage:
      "https://scontent.fbek1-3.fna.fbcdn.net/v/t51.2885-15/336299856_114987438146562_6557615572862936344_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=86c713&_nc_ohc=O7umoiV5kAQAX8KHLnY&_nc_ht=scontent.fbek1-3.fna&edm=AL-3X8kEAAAA&oh=00_AfAyAVtSzuY_r34CuGJ-XXMKAcKnuCMT_eFubW3IoLch-w&oe=64B7FE05",
  },
  {
    name: "Karthik Ayagar2",
    username: "ayangarkarthik",
    profileimage:
      "https://scontent.fbek1-3.fna.fbcdn.net/v/t51.2885-15/336299856_114987438146562_6557615572862936344_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=86c713&_nc_ohc=O7umoiV5kAQAX8KHLnY&_nc_ht=scontent.fbek1-3.fna&edm=AL-3X8kEAAAA&oh=00_AfAyAVtSzuY_r34CuGJ-XXMKAcKnuCMT_eFubW3IoLch-w&oe=64B7FE05",
  },
];



const RightSideBar = () => {

    // const [userfollows,setUserfollows] = useState([])
    // const [userfollowers, setUserfollowers] = useState([]);
    // setUserfollows(userfollows)
    // setUserfollowers(userfollowers)


  return (
    <div className="rightsidebar">
      <div className="topleft">
        <Info sx={{ fontSize: 62, color: grey["500"] }} />
        <Avatar
          src="https://scontent.fbek1-3.fna.fbcdn.net/v/t51.2885-15/336299856_114987438146562_6557615572862936344_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=86c713&_nc_ohc=O7umoiV5kAQAX8KHLnY&_nc_ht=scontent.fbek1-3.fna&edm=AL-3X8kEAAAA&oh=00_AfAyAVtSzuY_r34CuGJ-XXMKAcKnuCMT_eFubW3IoLch-w&oe=64B7FE05"
          alt="not found"
          sx={{ width: 60, height: 60 }}
        />
      </div>
      <div className="info">
        <Avatar
          src="https://scontent.fbek1-3.fna.fbcdn.net/v/t51.2885-15/336299856_114987438146562_6557615572862936344_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=86c713&_nc_ohc=O7umoiV5kAQAX8KHLnY&_nc_ht=scontent.fbek1-3.fna&edm=AL-3X8kEAAAA&oh=00_AfAyAVtSzuY_r34CuGJ-XXMKAcKnuCMT_eFubW3IoLch-w&oe=64B7FE05"
          alt="not found"
          sx={{ width: 200, height: 200 }}
        />

        <h1>Karthik Ayagar</h1>
        <Link href="https://www.instagram.com/ayangarkarthik/">
          <p>@ayangarkarthik</p>
        </Link>
      </div>
      <div className="recentfollowers">
        <h1>Recent followers</h1>
        <UserCard
          username={userfollowers[0].username}
          profileimage={userfollowers[0].profileimage}
          name={userfollowers[0].name}
        />
        <UserCard
          username={userfollowers[0].username}
          profileimage={userfollowers[0].profileimage}
          name={userfollowers[0].name}
        />
      </div>
      <div className="recentfollows">
        <h1>Recently followed</h1>
        <UserCard
          username={userfollowers[0].username}
          profileimage={userfollowers[0].profileimage}
          name={userfollowers[0].name}
        />
        <UserCard
          username={userfollowers[0].username}
          profileimage={userfollowers[0].profileimage}
          name={userfollowers[0].name}
        />
        <UserCard
          username={userfollowers[0].username}
          profileimage={userfollowers[0].profileimage}
          name={userfollowers[0].name}
        />
      </div>
    </div>
  );
};

export default RightSideBar;
