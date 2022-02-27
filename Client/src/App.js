import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import TakeMeTo from "./Pages/TakeMeTo";
import Login from "./Pages/Login";

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<TakeMeTo />} />
    <Route path="/login" element={<Login />} />
  </Routes>
  );
};

export default App;
