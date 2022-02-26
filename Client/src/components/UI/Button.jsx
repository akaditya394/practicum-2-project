import React from "react";
import "./Button.css";

const Button = (props) => {
  return (
    <div>
      <button>{props.children}</button>
    </div>
  );
};

export default Button;
