import React, { useState } from "react";
import "./MyTweets.css";
import Navbar from "../components/GeneralComponents/Navbar";
import Button from "../components/UI/Button";
import TweetOrPost from "../components/UI/TweetOrPost";
import CreateTweet from "../components/UI/CreateTweet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faImages,
  faBell,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";


const MyTweets = () => {
  const [tweets, setTweets] = useState([]);

  const addTweet = (enteredTweet) => {
    setTweets((prevTweets) => {
      return [
        ...prevTweets,
        {
          tweet: enteredTweet.tweet,
          comments: enteredTweet.comments,
          likes: enteredTweet.likes,
          retweets: enteredTweet.retweets,
          id: Math.random().toString(),
        },
      ];
    });
  };

  return (
    <div>
      <Navbar />
      <div className="mytweets_main">
        <div className="mytweets_left_container">
          <div className="mytweets_left_container_buttons">
            <Button className="my_tweets_button animate__animated animate__fadeIn">
              <FontAwesomeIcon icon={faHouse} />
            </Button>
            <Button className="my_tweets_button animate__animated animate__fadeIn">
              <FontAwesomeIcon icon={faBell} />
            </Button>
            <Button className="my_tweets_button animate__animated animate__fadeIn">
              <FontAwesomeIcon icon={faTwitter} />
            </Button>
            <Button className="my_tweets_button animate__animated animate__fadeIn">
              <FontAwesomeIcon icon={faImages} />
            </Button>
            <Button className="my_tweets_button animate__animated animate__fadeIn">
              <FontAwesomeIcon icon={faArrowRightFromBracket} />{" "}
            </Button>
          </div>
          <Button className="create_tweet_button">tweet</Button>
        </div>
        <div className="mytweets_middle_container">
          <CreateTweet onAddTweet={addTweet} />
          {tweets.length > 0 &&
            tweets.map((tweet) => (
              <TweetOrPost
                key={tweet.id}
                tweet={tweet.tweet}
                comments={tweet.comments}
                likes={tweet.likes}
                retweets={tweet.retweets}
              />
            ))}
        </div>
        <div className="mytweets_right_container"></div>
      </div>
    </div>
  );
};

export default MyTweets;
