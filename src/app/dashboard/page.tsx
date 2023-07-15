import ActivityFeed from "../components/ActivityFeed";
import Dashboardtop from "../components/Dashboardtop";
import LeftSideBar from "../components/LeftSideBar";
import RightSideBar from "../components/RightSideBar";
const Dashboard = () => {
  return (
    <div className="main">
      <LeftSideBar />

      <div className="content">
        <Dashboardtop name="Karthik" />
        <ActivityFeed />
      </div>
      <RightSideBar />
    </div>
  );
};

export default Dashboard;
