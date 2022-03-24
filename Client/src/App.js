import React from "react";
import { Routes, Route} from "react-router-dom";
import "./App.css";
import TakeMeTo from "./Pages/TakeMeTo";
import Auth from "./Pages/Auth";
import Profile from "./Pages/Profile";
import MyTweets from "./Pages/MyTweets";
import MyPosts from "./Pages/MyPosts";

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Auth />} />
    <Route path="/takemeto" element={<TakeMeTo />} />
    <Route path="/mytweets" element={<MyTweets />} />
    <Route path="/profile" element={<Profile />} />
    <Route path="/myposts" element={<MyPosts />} />
  </Routes>
  );
};

export default App;
