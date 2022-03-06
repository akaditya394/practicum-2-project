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
            <Button className="my_tweets_button">Home</Button>
            <Button className="my_tweets_button">My Tweets</Button>
            <Button className="my_tweets_button">Posts</Button>
            <Button className="my_tweets_button">Log out</Button>
          </div>
        </div>
        <div className="mytweets_middle_container"></div>
        <div className="mytweets_right_container"></div>
      </div>
    </div>
  );
};

export default MyTweets;
