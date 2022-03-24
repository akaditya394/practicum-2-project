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
          <span>
            <b>{props.notif}</b>
          </span>
        </div>
        <div className="notif-right">
          <span>{props.time}</span>
        </div>
      </div>
    </Fragment>
  );
};

export default Notification;
