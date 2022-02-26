import React from "react";
import "./Section.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
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
          <ArrowForwardIosIcon />
        </Button>
      </div>
    </div>
  );
};

export default Section;
