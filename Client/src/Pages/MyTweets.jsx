import React from "react";
import "./MyTweets.css";
import Navbar from "../components/welcome page components/Navbar";
import Button from "../components/UI/Button";
import TweetOrPost from "../components/UI/TweetOrPost";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faImages,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const MyTweets = () => {
  return (
    <div>
      <Navbar />
      <div className="mytweets_main">
        <div className="mytweets_left_container">
          <div className="mytweets_left_container_buttons">
            <Button className="my_tweets_button animate__animated animate__fadeIn animate__slower">
              <FontAwesomeIcon icon={faHouse} /><span>home</span>
            </Button>
            <Button className="my_tweets_button animate__animated animate__fadeIn animate__slower">
              <FontAwesomeIcon icon={faTwitter} /> <span>tweets</span>
            </Button>
            <Button className="my_tweets_button animate__animated animate__fadeIn animate__slower">
              <FontAwesomeIcon icon={faImages} /> <span>posts</span>
            </Button>
            <Button className="my_tweets_button animate__animated animate__fadeIn animate__slower">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />{" "}
              <span>log out</span>
            </Button>
          </div>
          <Button className="create_tweet_button">tweet</Button>
        </div>
        <div className="mytweets_middle_container">
            <TweetOrPost />
        </div>
        <div className="mytweets_right_container"></div>
      </div>
    </div>
  );
};

export default MyTweets;
