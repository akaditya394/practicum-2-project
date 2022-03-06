import React from "react";
import "./MyTweets.css";
import Navbar from "../components/welcome page components/Navbar";
import Button from "../components/UI/Button";

const MyTweets = () => {
  return (
    <div>
      <Navbar />
      <div className="mytweets_main">
        <div className="mytweets_left_container">
          <div className="mytweets_left_container_buttons">
            <Button className="my_tweets_button">home</Button>
            <Button className="my_tweets_button">my tweets</Button>
            <Button className="my_tweets_button">posts</Button>
            <Button className="my_tweets_button">log out</Button>
          </div>
        </div>
        <div className="mytweets_middle_container"></div>
        <div className="mytweets_right_container"></div>
      </div>
    </div>
  );
};

export default MyTweets;
