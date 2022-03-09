import React from "react";
import "./MyTweets.css";
import Navbar from "../components/welcome page components/Navbar";
import Button from "../components/UI/Button";
import TweetOrPost from "../components/UI/TweetOrPost";
import CreateTweet from "../components/UI/CreateTweet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faImages,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const DUMMY_TWEETS = [
  {
    tweet:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat semper erat ac semper. Mauris laoreet dolor id rhoncus lobortis. Donec nec odio metus. Aenean pellentesque neque vel diam interdum condimentum. Nam in orci ornare, eleifend ligula vitae, tincidunt risus. Etiam at nibh lorem. Nam sed bibendum est.",
    comments: "20",
    retweets: "45",
    likes: "65",
  },
];

const MyTweets = () => {
  return (
    <div>
      <Navbar />
      <div className="mytweets_main">
        <div className="mytweets_left_container">
          <div className="mytweets_left_container_buttons">
            <Button className="my_tweets_button animate__animated animate__fadeIn animate__slower">
              <FontAwesomeIcon icon={faHouse} />
              <span>home</span>
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
          <CreateTweet />
          <TweetOrPost
            tweet={DUMMY_TWEETS[0].tweet}
            comments={DUMMY_TWEETS[0].comments}
            retweets={DUMMY_TWEETS[0].retweets}
            likes={DUMMY_TWEETS[0].likes}
          />
        </div>
        <div className="mytweets_right_container"></div>
      </div>
    </div>
  );
};

export default MyTweets;
