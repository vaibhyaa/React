import React from "react";
import "../style.css";
import { ACTIONS } from "../ReactQuizApp";

const HomePage = ({ questions, dispatch }) => {
  return (
    <>
      <h1>Welcome to the React Quiz..!</h1>
      <p>{questions.length} question to test your React mastery</p>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.START });
        }}
      >
        Let'S Start
      </button>
    </>
  );
};

export default HomePage;
