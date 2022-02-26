import React from "react";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="animate__animated animate__fadeIn animate__slow">
      <h1 className="welcome-message">
        Welcome
        <span className="animate__animated animate__fadeInDown animate__fast">
          .
        </span>
        <span className="animate__animated animate__fadeInDown animate__fast animate__delay-1s ">
          .
        </span>
        <span className="animate__animated animate__fadeInDown animate__fast  animate__delay-2s ">
          .
        </span>
      </h1>
    </div>
  );
};

export default Welcome;
