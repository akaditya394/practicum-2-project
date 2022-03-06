import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button className={`${props.className}`}>{props.children}</button>
    </div>
  );
};

export default Button;
