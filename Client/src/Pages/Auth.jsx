import React from "react";
import "./Auth.css";
import Button from "../components/UI/Button";
import Navbar from "../components/welcome page components/Navbar";

const Auth= () => {
  return (
    <div>
      <Navbar />
      <div className="login_parent">
        <div className="loginsignup_message">
          <h1 className="login_or_signup">login or signup...</h1>
        </div>
        <div className="loginsignup_auth">
          <div>
            <Button>
             Sign up with Google
            </Button>
          </div>
          <div>
            <Button>Login with Google</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
