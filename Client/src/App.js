import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import TakeMeTo from "./Pages/TakeMeTo";
import Auth from "./Pages/Auth";

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Auth />} />
    <Route path="/takemeto" element={<TakeMeTo />} />
  </Routes>
  );
};

export default App;
