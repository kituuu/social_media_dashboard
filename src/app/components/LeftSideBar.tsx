import AllInboxIcon from "@mui/icons-material/AllInbox";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DashboardIcon from "@mui/icons-material/Dashboard";
import {
  BugReport,
  BugReportOutlined,
  EventAvailable,
  Settings,
  SlowMotionVideo,
} from "@mui/icons-material";

const LeftSideBar = () => {
  return (
    <div className="leftsidebar">
      <h1 className="logo">BuzzBoard</h1>
      <div className="options">
        <h3>MENU</h3>
        <ul>
          <li>
            <DashboardIcon sx={{ fontSize: 40, marginRight: 1 }} /> Dashboard
          </li>
          <li>
            <EventAvailable sx={{ fontSize: 40, marginRight: 1 }} /> Schedule
          </li>
        </ul>
      </div>
      <div className="options">
        <h3>CONTENT</h3>
        <ul>
          <li>
            <AllInboxIcon sx={{ fontSize: 40, marginRight: 1 }} /> Posts
          </li>
          <li>
            <OndemandVideoIcon sx={{ fontSize: 40, marginRight: 1 }} /> Reels
          </li>
        </ul>
      </div>
      <div className="options">
        <h3>ORGANISATION</h3>
        <ul>
          <li>
            <SlowMotionVideo sx={{ fontSize: 40, marginRight: 1 }} /> Time Spent
          </li>
          <li>
            <Settings sx={{ fontSize: 40, marginRight: 1 }} /> Settings
          </li>
          <li>
            <BugReport sx={{ fontSize: 40, marginRight: 1 }} /> Report
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSideBar;
