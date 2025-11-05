import React from "react";
import "../style.css";
import { ACTIONS } from "../ReactQuizApp";

const FinishScreen = ({ points, maxPossiblePoints, highscore, dispatch }) => {
  const percentage = (points / maxPossiblePoints) * 100;
  let emoji;
  if (percentage === 100) {
    emoji = "🥇"; // perfect score
  } else if (percentage >= 70) {
    emoji = "🔥"; // did great
  } else if (percentage >= 40) {
    emoji = "🙂"; // decent
  } else {
    emoji = "🔁"; // needs retry
  }

  return (
    <>
      <>
        <p>
          your scored{" "}
          <strong>
            <b>{points}</b>
          </strong>{" "}
          out of {maxPossiblePoints}
        </p>
        <p>
          {Math.ceil(percentage)}% {emoji}
        </p>
        <p>High Score: {highscore} points</p>
      </>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.RESTART });
        }}
      >
        Restart Quiz
      </button>
    </>
  );
};

export default FinishScreen;
