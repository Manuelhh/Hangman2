import React from "react";
import "./WordToGuess.css";

type WordToGuessProps = {
  wordToGuess: string;
  guessedLetters: string[];
};

export const WordToGuess: React.FC<WordToGuessProps> = ({
  wordToGuess,
  guessedLetters,
}: WordToGuessProps) => {
  return (
    <div className="WTGContainer">
      {wordToGuess.split("").map((letter, i) => (
        <span className="letter" key={i}>
          <span
            style={{
              visibility: guessedLetters.includes(letter)
                ? "visible"
                : "hidden",
            }}
          >
            {letter}
          </span>
        </span>
      ))}
    </div>
  );
};
