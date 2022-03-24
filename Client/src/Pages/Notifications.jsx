import React, { Fragment } from "react";
import "./Notifications.css";
import Navbar from "../components/GeneralComponents/Navbar";
import Button from "../components/UI/Button";
import Notification from "../components/GeneralComponents/Notification";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faImages,
  faBell,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Notifications = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="notifications_main">
        <div className="notifications_left_container">
          <div className="notifications_left_container_buttons">
            <Button className="notifications_button animate__animated animate__fadeIn">
              <FontAwesomeIcon icon={faHouse} />
            </Button>
            <Button className="notifications_button animate__animated animate__fadeIn">
              <FontAwesomeIcon icon={faBell} />
            </Button>
            <Button className="notifications_button animate__animated animate__fadeIn">
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
            <Button className="notifications_button animate__animated animate__fadeIn">
              <FontAwesomeIcon icon={faImages} />
            </Button>
            <Button className="notifications_button animate__animated animate__fadeIn">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />{" "}
            </Button>
          </div>
          <Button className="markasseen_button">mark as read</Button>
        </div>
        <div className="notifications_middle_container">
        <Notification notif="lorem ipsum iske aage ka nahi malum" time="5:26 pm" />
        <Notification notif="lorem ipsum iske aage ka nahi malum" time="5:26 pm" />
        <Notification notif="lorem ipsum iske aage ka nahi malum" time="5:26 pm" />
        <Notification notif="lorem ipsum iske aage ka nahi malum" time="5:26 pm" />
        <Notification notif="lorem ipsum iske aage ka nahi malum" time="5:26 pm" />
        <Notification notif="lorem ipsum iske aage ka nahi malum" time="5:26 pm" />
        </div>
        <div className="notifications_right_container"></div>
      </div>
    </Fragment>
  );
};

export default Notifications;
