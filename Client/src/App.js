import React from "react";
import "./App.css";
import Section from "../src/components/welcome page components/Section";

const App = () => {
  return (
    <div className="parent">
      <div className="take-me-to">
        <div className="sections_upper">
          <Section className="section_profile" />
          <Section className="section_tweets" />
        </div>
        <div className="sections_lower">
          <Section className="section_posts" />
          <Section className="section_logout" />
        </div>
      </div>
    </div>
  );
};

export default App;
