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
      <div className="tweetorpost_main animate__animated animate__fadeInUp animate__slow">
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
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                feugiat semper erat ac semper. Mauris laoreet dolor id rhoncus
                lobortis. Donec nec odio metus. Aenean pellentesque neque vel
                diam interdum condimentum. Nam in orci ornare, eleifend ligula
                vitae, tincidunt risus. Etiam at nibh lorem. Nam sed bibendum
                est.
              </p>
            </div>
          </div>
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
