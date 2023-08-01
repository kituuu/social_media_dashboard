import ActivityFeed from "@/app/components/ActivityFeed";
import AnalyticsChart from "@/app/components/AnalyticsChart";
import Dashboardtop from "@/app/components/Dashboardtop";
import { Props } from "@/app/inteface";
import axios from "axios";
const Dashboard = async({ params }: Props) => {
  const data = await axios
    .get(`http://127.0.0.1:8000/${params.username}`)
    .then(function (response) {
      return response.data;
    });
    const insights = await axios
      .get(`http://127.0.0.1:8000/getuserinsights/${data.id}`)
      .then(function (response) {
        return response.data;
      });


  return (
    <div className="content">
      <Dashboardtop username={params.username} />
      <AnalyticsChart insights={insights}/>
      <ActivityFeed username={params.username} />
    </div>
  );
};

export default Dashboard;
