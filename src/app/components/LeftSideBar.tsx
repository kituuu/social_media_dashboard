"use client";
import "@/app/styles/components/leftSideBar.css";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import DashboardIcon from "@mui/icons-material/Dashboard";
import logo from "@/app/images/logo.png";
import { useRouter, usePathname } from "next/navigation";
import {
  BugReport,
  EventAvailable,
  Settings,
  SlowMotionVideo,
} from "@mui/icons-material";
import Image from "next/image";
const LeftSideBar = (params: { username: string }) => {
  const currentRoute = usePathname();
  const router = useRouter();
  return (
    <div className="leftsidebar">
      <h1 className="logo">
        {" "}
        <Image alt="Not Found" src={logo} width={44} height={41} /> BuzzBoard
      </h1>
      <div className="options">
        <h3>MENU</h3>
        <ul>
          <li
            id={
              currentRoute === `/${params.username}/dashboard`
                ? "active"
                : ""
            }
            onClick={() => {
              router.push(`/${params.username}/dashboard`);
            }}
          >
            <DashboardIcon sx={{ fontSize: 40, marginRight: 1 }} /> Dashboard
          </li>
          <li
            id={
              currentRoute === `/${params.username}/schedule` ? "active" : ""
            }
            onClick={() => {
              router.push(`/${params.username}/schedule`);
            }}
          >
            <EventAvailable sx={{ fontSize: 40, marginRight: 1 }} /> Schedule
          </li>
        </ul>
      </div>
      <div className="options">
        <h3>CONTENT</h3>
        <ul>
          <li
            id={currentRoute === `/${params.username}/posts` ? "active" : ""}
            onClick={() => {
              router.push(`/${params.username}/posts`);
            }}
          >
            <AllInboxIcon sx={{ fontSize: 40, marginRight: 1 }} /> Posts
          </li>
          <li
            id={currentRoute === `/${params.username}/reels` ? "active" : ""}
            onClick={() => {
              router.push(`/${params.username}/reels`);
            }}
          >
            <OndemandVideoIcon sx={{ fontSize: 40, marginRight: 1 }} /> Reels
          </li>
        </ul>
      </div>
      <div className="options">
        <h3>ORGANISATION</h3>
        <ul>
          <li
            id={
              currentRoute === `/${params.username}/timespent`
                ? "active"
                : ""
            }
            onClick={() => {
              router.push(`/${params.username}/timespent`);
            }}
          >
            <SlowMotionVideo sx={{ fontSize: 40, marginRight: 1 }} /> Time Spent
          </li>
          <li
            id={
              currentRoute === `/${params.username}/settings` ? "active" : ""
            }
            onClick={() => {
              router.push(`/${params.username}/settings`);
            }}
          >
            <Settings sx={{ fontSize: 40, marginRight: 1 }} /> Settings
          </li>
          <li
            id={
              currentRoute === `/${params.username}/report`
                ? "active"
                : ""
            }
            onClick={() => {
              router.push(`/${params.username}/report`);
            }}
          >
            <BugReport sx={{ fontSize: 40, marginRight: 1 }} /> Report
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSideBar;
