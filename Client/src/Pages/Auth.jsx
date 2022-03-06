import React from "react";
import { Link } from "react-router-dom";
import "./Auth.css";
import Button from "../components/UI/Button";
import Navbar from "../components/welcome page components/Navbar";

const Auth = () => {
  return (
    <div>
      <Navbar />
      <div className="login_parent">
        <div className="loginsignup_message">
          <h1 className="login_or_signup animate__animated animate__fadeIn animate__slower">login or signup...</h1>
        </div>
        <div className="loginsignup_auth animate__animated animate__fadeIn animate__slower">
          <div>
            <Link to="/takemeto">
              <Button>Sign up with Google</Button>
            </Link>
          </div>
          <div>
            <Link to="/takemeto">
              <Button>Login with Google</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
