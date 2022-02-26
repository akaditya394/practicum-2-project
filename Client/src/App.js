import React from "react";
import "./App.css";
import Section from "../src/components/welcome page components/Section";
import Welcome from "./components/welcome page components/Welcome";
import Navbar from "../src/components/welcome page components/Navbar";

const App = () => {
  return (
    <div className="parent">
      <Navbar />
      <div className="welcome-page-flex">
        <Welcome />
        <div className="take-me-to">
          <div className="sections_upper">
            <Section className="section_profile animate__animated animate__fadeIn animate__slower" />
            <Section className="section_tweets animate__animated animate__fadeIn animate__slower" />
          </div>
          <div className="sections_lower">
            <Section className="section_posts animate__animated animate__fadeIn animate__slower" />
            <Section className="section_logout animate__animated animate__fadeIn animate__slower" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
