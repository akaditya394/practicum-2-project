import React from 'react';
import "./TakeMeTo.css";
import Section from "../components/GeneralComponents/Section";
import Welcome from "../components/GeneralComponents/Welcome";
import Navbar from "../components/GeneralComponents/Navbar";

const TakeMeTo = () => {
  return (
    <div className="parent animate__animated">
      <Navbar />
      <div className="welcome-page-flex">
        <Welcome />
        <div className="take-me-to">
          <div className="sections_upper">
            <Section
              title="profile"
              description="your profile!"
              className="section_profile animate__animated animate__fadeIn"
            />
            <Section
              title="tweets"
              description="have a look at your tweets"
              className="section_tweets animate__animated animate__fadeIn "
            />
          </div>
          <div className="sections_lower">
            <Section
              title="posts"
              description="lets go through your posts!"
              className="section_posts animate__animated animate__fadeIn"
            />
             <Section
              title="logout"
              description="see ya!"
              className="section_logout animate__animated animate__fadeIn"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TakeMeTo;