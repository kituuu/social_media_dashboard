
import React from 'react'
import Feed from './Feed';

const ActivityFeed = () => {
  return (
    <div className="activityfeed">
      <h1>Activity Feed</h1>
      <div className="activity">
        <Feed
          profileimage="https://scontent.fbek1-3.fna.fbcdn.net/v/t51.2885-15/336299856_114987438146562_6557615572862936344_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=86c713&_nc_ohc=O7umoiV5kAQAX8KHLnY&_nc_ht=scontent.fbek1-3.fna&edm=AL-3X8kEAAAA&oh=00_AfAyAVtSzuY_r34CuGJ-XXMKAcKnuCMT_eFubW3IoLch-w&oe=64B7FE05"
          username="ayangarkarthik"
          message="tagged you in a post"
          timemessage="18 min ago"
          media="https://scontent.fbek1-3.fna.fbcdn.net/v/t51.2885-15/336299856_114987438146562_6557615572862936344_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=86c713&_nc_ohc=O7umoiV5kAQAX8KHLnY&_nc_ht=scontent.fbek1-3.fna&edm=AL-3X8kEAAAA&oh=00_AfAyAVtSzuY_r34CuGJ-XXMKAcKnuCMT_eFubW3IoLch-w&oe=64B7FE05"
        />
      </div>
    </div>
  );
}

export default ActivityFeed