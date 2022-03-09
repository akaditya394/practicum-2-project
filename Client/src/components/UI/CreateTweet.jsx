import React from "react";
import { useState } from "react";
import Button from "../UI/Button";
import "./CreateTweet.css";

const CreateTweet = () => {
  const [tweetInputField, setTweetInputField] = useState();
  const handleInputChange = (event) => {
    setTweetInputField(event.target.value);
  };
  const handleAddTweet = (event) => {
    event.preventDefault();
    setTweetInputField("");
  };

  return (
    <div>
      <div className="createtweet_main">
        <form onSubmit={handleAddTweet}>
          <div>
            <textarea
              className="createtweet_textarea"
              placeholder="what's on your mind?"
              rows="6"
              cols="90"
              value={tweetInputField}
              onChange={handleInputChange}
            />
          </div>
          <div>
            <Button type="submit" className="addtweet_button">
              tweet
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTweet;
