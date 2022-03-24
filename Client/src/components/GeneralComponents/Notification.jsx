import React, { Fragment } from "react";
import "./Notification.css";

const Notification = (props) => {
  return (
    <Fragment>
      <div class="notif-main">
        <div className="notif-left">
          <img src={props.imageAdd} alt={props.altText} />
        </div>
        <div className="notif-middle">
          <p><b>{props.notif}</b></p>
        </div>
        <div className="notif-right">
          <p>{props.time}</p>
        </div>
      </div>
    </Fragment>
  );
};

export default Notification;
