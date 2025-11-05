import React from "react";
import { ACTIONS } from "../ReactQuizApp";
import "../style.css";

const NextButton = ({ dispatch, answerIndex, questions, questionIndex }) => {
  const totalQuestions = questions.length;
  // console.log(totalQuestions);

  // if answer in not clicked the dont show any button
  if (answerIndex == null) {
    return null;
  }

  if (questionIndex < totalQuestions - 1)
    return (
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.NEXTQUESTION });
        }}
      >
        NEXT
      </button>
    );

  if (questionIndex === totalQuestions - 1)
    return (
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.FINISHED });
        }}
      >
        Finish
      </button>
    );

  // if (questionIndex < totalQuestions - 1)
  //   return (
  //     <button
  //       onClick={() => {
  //         dispatch({ type: ACTIONS.FINISHED });
  //       }}
  //     >
  //       Finish
  //     </button>
  //   );
};

export default NextButton;
