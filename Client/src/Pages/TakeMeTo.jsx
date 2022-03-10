import React from 'react';
import { Link } from "react-router-dom";
import "./TakeMeTo.css";
import Section from "../components/welcome page components/Section";
import Welcome from "../components/welcome page components/Welcome";
import Navbar from "../components/welcome page components/Navbar";

const TakeMeTo = () => {
  return (
    <div className="parent">
      <Navbar />
      <div className="welcome-page-flex">
        <Welcome />
        <div className="take-me-to">
          <div className="sections_upper">
            <Section
              title="profile"
              description="your profile!"
              className="section_profile animate__animated animate__fadeIn animate__slower"
            />
            <Section
              title="tweets"
              description="have a look at your tweets"
              className="section_tweets animate__animated animate__fadeIn animate__slower"
            />
          </div>
          <div className="sections_lower">
            <Section
              title="posts"
              description="lets go through your posts!"
              className="section_posts animate__animated animate__fadeIn animate__slower"
            />
             <Section
              title="logout"
              description="see ya!"
              className="section_logout animate__animated animate__fadeIn animate__slower"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TakeMeTo;