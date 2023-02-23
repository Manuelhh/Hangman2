import React, { useEffect } from "react";
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

  const incorrectLetters: string[] = guessedLetters.filter(
    (letter: string) => !wordToGuess.includes(letter)
  );

  const addGuessedLetter = (key: string) => {
    if (guessedLetters.includes(key)) return;

    setGuessesLetters((currentLetters) => [...currentLetters, key]);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;

      e.preventDefault();
      addGuessedLetter(key);
    };

    document.addEventListener("keypress", handler);

    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/hangman"
        element={
          <HangmanPage
            numberOfGuesses={incorrectLetters.length}
            wordToGuess={wordToGuess}
            guessedLetters={guessedLetters}
            activeLetters={guessedLetters.filter((letter) =>
              wordToGuess.includes(letter)
            )}
            inactiveLetters={incorrectLetters}
            addGuessedLetter={addGuessedLetter}
          />
        }
      />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export default App;
