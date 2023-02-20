import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "./PageComponents/Home/Home";
import { ErrorPage } from "./PageComponents/ErrorPage/ErrorPage";
import { HangmanPage } from "./PageComponents/HangmanPage/HangmanPage";

import "./App.css";

const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hangman" element={<HangmanPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
