import React from "react";
import ProfileDetail from "./components/ProfileDetail";

const DUMMY_PROFILE = {
  profileImg:
    "https://firebasestorage.googleapis.com/v0/b/arn-rai-dee.appspot.com/o/author_img%2Ftony.jpg?alt=media&token=1ec4d8c4-0873-4524-b52e-6a8ed7bb02b7",
  name: "Tony Woodsome",
  city: "Dubai, the United Arab Emirates",
  detail: "The 23rd Prime Minister of Thailand (In office 2001 - 2006)",
};

const Profile = (props) => {
  return <ProfileDetail profile={DUMMY_PROFILE} />;
};

export default Profile;
