import React from "react";
import "./TweetOrPost.css";
import Button from "../UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faRetweet,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

const TweetOrPost = (props) => {
  return (
    <div>
      <div className="tweetorpost_main animate__animated animate__fadeInUp">
        <div className="tweetorpost_upper">
          <div className="tweetorpost_profileImage">
            <img
              alt="profile_pic"
              src="https://pbs.twimg.com/profile_images/1166471091663122433/5ULjGFJS_400x400.jpg"
              height="50px"
              width="50px"
              className="tworpo_profilePic"
            />
          </div>
          <div className="tweetorpost_content">
            <div>
              <p className="tworpo_name">Aditya Kumar</p>
            </div>
            <div>
              <p>{props.tweet}</p>
            </div>
          </div>
        </div>
        <div className="tweetorpost_lower">
          <div>
            <Button className="tworpo_comment">
            {props.comments}  <FontAwesomeIcon icon={faComment} />
            </Button>
          </div>
          <div>
            <Button className="tworpo_retweet">
            {props.retweets}  <FontAwesomeIcon icon={faRetweet} />
            </Button>
          </div>
          <div>
            <Button className="tworpo_heart">
            {props.likes}  <FontAwesomeIcon icon={faHeart} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TweetOrPost;
