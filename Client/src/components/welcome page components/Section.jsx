import React from "react";
import "./Section.css";

const Section = (props) => {
  return (
    <div className={`section_box ${props.className}`}>
      <div className="section_title"><h1>{props.title}</h1></div>
      <div className="section_description"><p>{props.description}</p></div>
      <button>Go In</button>
    </div>
  );
};

export default Section;
