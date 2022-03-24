import React, { Fragment } from "react";
import "./MyPosts.css";
import Navbar from "../components/GeneralComponents/Navbar";
import Button from "../components/UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faImages,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const MyPosts = () => {
  return (
    <Fragment>
      <Navbar />
      <div className="myposts-main">
        <div className="myposts-left">
          <div className="myposts_left_container_buttons">
            <Button className="my_posts_button animate__animated animate__fadeIn">
              <FontAwesomeIcon icon={faHouse} />
              <span>home</span>
            </Button>
            <Button className="my_posts_button animate__animated animate__fadeIn">
              <FontAwesomeIcon icon={faTwitter} /> <span>tweets</span>
            </Button>
            <Button className="my_posts_button animate__animated animate__fadeIn">
              <FontAwesomeIcon icon={faImages} /> <span>posts</span>
            </Button>
            <Button className="my_posts_button animate__animated animate__fadeIn">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />{" "}
              <span>log out</span>
            </Button>
          </div>
          <Button className="create_post_button">create post</Button>
        </div>
        <div className="myposts-middle"></div>
        <div className="myposts-right"></div>
      </div>
    </Fragment>
  );
};

export default MyPosts;
