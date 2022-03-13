import React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import TakeMeTo from "./Pages/TakeMeTo";
import Auth from "./Pages/Auth";
import Profile from "./Pages/Profile";
import MyTweets from "./Pages/MyTweets";

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Auth />} />
    <Route path="/takemeto" element={<TakeMeTo />} />
    <Route path="/mytweets" element={<MyTweets />} />
    <Route path="/profile" element={<Profile />} />
  </Routes>
  );
};

export default App;
