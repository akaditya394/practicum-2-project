import React, { Fragment } from "react";
import "./Profile.css";
import Navbar from "../components/GeneralComponents/Navbar";

const Profile = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="profile-container">
        <div className="profile-main animate__animated animate__fadeIn">
          <div className="profile-upper">
            <div className="profile-image-div">
              <img
              className="profile-image"
                src="https://nettv4u.com/imagine/23-10-2019/hrithik-roshan.jpg"
                alt="profile-pic"
              />
            </div>
            <div className="profile-name-bio">
              <div>
                <h2>Aditya Kumar</h2>
              </div>
              <div>
                <p>
                  <i>"In colorful delusions, I keep flying"</i>
                </p>
              </div>
            </div>
          </div>
          <div className="profile-lower animate__animated animate__fadeIn">
            <div className="profile-no-of-tweets">
              <h3>124</h3>
              <p>tweets</p>
            </div>
            <div className="profile-no-of-posts">
              <h3>156</h3>
              <p>posts</p>
            </div>
            <div className="profile-no-of-followers">
              <h3>484</h3>
              <p>followers</p>
            </div>
            <div className="profile-no-of-following">
              <h3>29</h3>
              <p>following</p>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Profile;
