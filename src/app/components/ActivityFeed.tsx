
import React from "react";
import Feed from "./Feed";
import "@/app/styles/components/activityfeed.css";
import { data } from "@/app/beebomco";

import { Post } from "@/app/inteface";
import axios from "axios";
const ActivityFeed = async (params: { username: string }) => {
  const data = await axios
    .get(`http://127.0.0.1:8000/${params.username}`)
    .then(function (response) {
      return response.data;
    });
    const posts = data.media.data
  return (
    <div className="activityfeed">
      <h1>Activity Feed</h1>
      <div className="activity">
        {posts.map((post: Post) => (
          <Feed
            profileimage={data.profile_picture_url}
            message={post.caption.slice(0, 80) + "..."}
            timemessage={post.timestamp}
            permaurl={post.permalink}
          />
        ))}
        <h1><a href={`/${params.username}/posts`}>See All Posts</a></h1>
      </div>
    </div>
  );
};

export default ActivityFeed;
