import React from "react";
import Button from "../UI/Button";
import "./CreateTweet.css";

const CreateTweet = () => {
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
            />
          </div>
          <div>
            <Button className="addtweet_button">tweet</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTweet;
