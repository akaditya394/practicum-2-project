import React from "react";
import Button from "../UI/Button";
import "./CreateTweet.css";

const CreateTweet = () => {
  return (
    <div>
      <div>
        <form>
          <div>
            <textarea
              className="createtweet_textarea"
              placeholder="what's on your mind?"
              rows="6"
              cols="93"
            />
          </div>
          <div>
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateTweet;
