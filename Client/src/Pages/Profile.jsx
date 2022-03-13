import React, { Fragment } from "react";
import "./Profile.css";
import Navbar from "../components/GeneralComponents/Navbar";

const Profile = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="profile-container">
        <div className="profile-main">
          <div className="profile-upper">
            <div className="profile-image-div"></div>
            <div className="profile-name-bio"></div>
          </div>
          <div className="profile-lower">
            <div className="profile-no-of-tweets"></div>
            <div className="profile-no-of-posts"></div>
            <div className="profile-no-of-followers"></div>
            <div className="profile-no-of-following"></div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
