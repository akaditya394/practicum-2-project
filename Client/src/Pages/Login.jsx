import React from "react";
import "./Login.css";
import Button from "../components/UI/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Login = () => {
  return (
    <div className="login_parent">
      <div className="loginsignup_message">
        <h1>login or signup...</h1>
      </div>
      <div className="loginsignup_auth">
          <div>
            <Button>
              <FontAwesomeIcon icon="fa-brands fa-google" /> Sign up with Google
            </Button>
          </div>
          <div>
            <Button>Login with Google</Button>
          </div>
      </div>
    </div>
  );
};

export default Login;
