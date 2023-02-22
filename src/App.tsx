import React from "react";
import { useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./PageComponents/Home/Home";
import { ErrorPage } from "./PageComponents/ErrorPage/ErrorPage";
import { HangmanPage } from "./PageComponents/HangmanPage/HangmanPage";
import words from "./wordList.json";

const App: React.FC = () => {
  const [wordToGuess, setWordToGuess] = useState<string>((): string => {
    return words[Math.floor(Math.random() * words.length)];
  });

  const [guessedLetters, setGuessesLetters] = useState<string[]>([]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/hangman" element={<HangmanPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
