// components/layout/Layout.tsx
import LeftSideBar from "@/app/components/LeftSideBar";
import RightSideBar from "@/app/components/RightSideBar";
import React, { PropsWithChildren } from "react";
interface Props extends PropsWithChildren {
  params: { username: string };
}
const Layout = (props: Props) => {
  return (
    <div className="main">
      <LeftSideBar username={props.params.username}/>;
      {props.children}
      {/* <RightSideBar username={props.params.username} /> */}
    </div>
  );
};

export default Layout;
