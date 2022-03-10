import React from "react";
import { useState } from "react";
import Button from "../UI/Button";
import "./CreateTweet.css";

const CreateTweet = (props) => {
  const [tweetContent, setTweetContent] = useState("");
  const [tweetComments, setTweetComments] = useState("29");
  const [tweetLikes, setTweetLikes] = useState("29");
  const [tweetRetweets, setTweetRetweets] = useState("29");

  const handleInputChange = (event) => {
    setTweetContent(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const tweetData = {
      tweet: tweetContent,
      comments: tweetComments,
      retweets: tweetRetweets,
      likes: tweetLikes,
      id: Math.random().toString,
    };

    props.onAddTweet(tweetData);

    setTweetContent("");
  };

  return (
    <div>
      <div className="createtweet_main">
        <form>
          <div>
            <textarea
              className="createtweet_textarea"
              placeholder="what's on your mind?"
              rows="6"
              cols="90"
              value={tweetContent}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Button
              type="submit"
              onClick={handleSubmit}
              className="addtweet_button"
            >
              tweet
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTweet;
