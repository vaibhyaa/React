import React from "react";

import { ACTIONS } from "../ReactQuizApp";

const SingleQuestion = ({
  questions,
  questionIndex,
  dispatch,
  answerIndex,
}) => {
  // console.log(questions);

  return (
    <div>
      {questions[questionIndex].options.map((eachOption, i) => {
        // console.log(i);
        const isClicked = answerIndex === i;
        const isCorrect = i === questions[questionIndex].correctOption;

        // console.log("condition are ", isCorrect, isClicked);
        // First option (Angular) → false false → not the correct answer, not clicked.
        // Second option (React) → true false → this option is correct, but not clicked.
        // Third option (Svelte) → false false → not correct, not clicked.
        // Fourth option (Vue) → false false → not correct, not clicked.
        // So in this test run, the user clicked Angular (index 0), but the correct o

        return (
          <button
            style={{
              // here condition is if i clicked the check for correct click and check for right and wrong but if i didnt click then all white
              backgroundColor: isClicked
                ? isCorrect
                  ? "lightgreen" // ✅ correct
                  : "red" // ❌ wrong
                : "white", // default
            }}
            key={`${questionIndex}-${i}`}
            // That gives you:
            // Question 0, option 0 → "0-0"
            // Question 0, option 1 → "0-1"
            // Question 1, option 0 → "1-0"
            onClick={() => {
              //   console.log(eachOption.correctOption);
              //   console.log(i);
              dispatch({
                type: ACTIONS.NEWANSWER,
                payload: i,
              });
            }}
            disabled={answerIndex !== null}
          >
            {eachOption}
          </button>
        );
      })}
    </div>
  );
};

export default SingleQuestion;

// Let’s break it down step by step

// Game just started → you didn’t click any answer yet
// That means in your state reducer, answerIndex is still null.

// Looping over options
// For the first question, suppose the data is:
// {
//   question: "Which is the most popular JavaScript framework?",
//   options: ["Angular", "React", "Svelte", "Vue"],
//   correctOption: 1, // (React is correct)
//   points: 11
// }

// When React renders each button
// For each option (i from 0 → 3):

// i = 0 ("Angular")
// isCorrect = (0 === 1) → false
// isClicked = (null === 0) → false
// → false false

// i = 1 ("React")
// isCorrect = (1 === 1) → true
// isClicked = (null === 1) → false
// → true false

// i = 2 ("Svelte")
// isCorrect = (2 === 1) → false
// isClicked = (null === 2) → false
// → false false

// i = 3 ("Vue")
// isCorrect = (3 === 1) → false
// isClicked = (null === 3) → false
// → false false
