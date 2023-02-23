import "./HangmanPage.css";

export const HangmanPage: React.FC = () => {
  return (
    <div className="hangmanPage">
      <div className="mainConatiner">
        <div className="outcomeMessageContainer"></div>
        <div className="leftContainer">
          <div className="animationContainer"></div>
          <div className="wordToGuessContainer"></div>
        </div>
        <div className="writeContainer">
          <div className="keyboardContainer"></div>
        </div>
      </div>
    </div>
  );
};
