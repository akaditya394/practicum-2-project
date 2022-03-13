import React from "react";
import "./Section.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../UI/Button";
const Section = (props) => {
  return (
    <div className={`section_box ${props.className}`}>
      <div className="section_title">
        <h1>{props.title}</h1>
      </div>
      <div className="section_description">
        <p>{props.description}</p>
      </div>
      <div>
        <Button>
          <FontAwesomeIcon icon={faAngleRight} />
        </Button>
      </div>
    </div>
  );
};

export default Section;
