import React from "react";
import "./TweetOrPost.css";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faRetweet,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const TweetOrPost = () => {
  return (
    <div>
      <div className="tweetorpost_main">
        <div className="tweetorpost_upper">
          <div className="tweetorpost_profileImage"></div>
          <div className="tweetorpost_content"></div>
        </div>
        <div className="tweetorpost_lower">
          <div>
            <Button className="tworpo_comment">
              <FontAwesomeIcon icon={faComment} />
            </Button>
          </div>
          <div>
            <Button className="tworpo_retweet">
              <FontAwesomeIcon icon={faRetweet} />
            </Button>
          </div>
          <div>
            <Button className="tworpo_heart">
              <FontAwesomeIcon icon={faHeart} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetOrPost;
