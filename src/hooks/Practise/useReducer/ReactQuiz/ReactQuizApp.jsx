/* eslint-disable no-case-declarations */
import React, { useEffect, useReducer } from "react";
import Header from "./Components/Header";
import Main from "./Main";
import Loader from "./Components/Loader";
import Error from "./Components/Error";
import HomePage from "./Components/HomePage";
import "./style.css";
import Question from "./Components/Question";
import NextButton from "./Components/NextButton";
import ProgressBar from "./Components/ProgressBar";
import FinishScreen from "./Components/FinishScreen";
import Timer from "./Components/Timer";

export const ACTIONS = {
  DATARECEIVED: "dataReceived",
  DATAFAILED: "dataFailed",
  START: "start",
  NEWANSWER: "new-answer",
  NEXTQUESTION: "next-question",
  FINISHED: "finished",
  RESTART: "restart",
  TICK: "tick",
};

const ReactQuizApp = () => {
  const [
    {
      questions,
      status,
      questionIndex,
      answerIndex,
      points,
      highscore,
      secRemaining,
    },
    dispatch,
  ] = useReducer(
    (state, action) => {
      switch (action.type) {
        case ACTIONS.DATARECEIVED:
          return { ...state, questions: action.payload, status: "ready" };

        case ACTIONS.DATAFAILED:
          return { ...state, status: "error" };

        case ACTIONS.START:
          return {
            ...state,
            status: "active",
            secRemaining: state.questions.length,
          };

        case ACTIONS.NEWANSWER:
          const question = state.questions.at(state.questionIndex);
          // console.log("question is :", question);
          // console.log(
          //   "question is :",
          //   question,
          //   "current points:",
          //   state.points
          // );

          return {
            ...state,
            points:
              action.payload === question.correctOption
                ? state.points + question.points
                : state.points + 0,
            answerIndex: action.payload,
          };

        case ACTIONS.NEXTQUESTION:
          return {
            ...state,
            questionIndex: state.questionIndex + 1,
            answerIndex: null,
            secRemaining: state.questions.length,
          };

        case ACTIONS.FINISHED:
          return {
            ...state,
            status: "finished",
            highscore:
              state.points >= state.highscore ? state.points : state.highscore,
          };

        case ACTIONS.TICK:
          // const newTime = state.secRemaining - 1;
          return {
            // if sec becomes zer the change status to finished and display result otherwise keep status as TICK
            ...state,
            secRemaining: state.secRemaining - 1,
            // secRemaining: newTime,
            status: state.secRemaining === 1 ? "finished" : state.status,
            // status: newTime === 0 ? "finished" : state.status,
          };

        // ...state, secRemaining: state.secRemaining - 1, // if sec becomes zer the change status to finished and display result otherwise keep status as TICK status: state.secRemaining === 0 ? "finished" : state.status,?

        case ACTIONS.RESTART:
          return {
            questions: state.questions,
            questionIndex: 0,
            answerIndex: null,
            points: 0,
            status: "ready",
            secRemaining: state.questions.length,
          };

        default:
          throw new Error("actions unknown ");
      }
    },
    {
      questions: [],
      //'loading' , 'error', 'ready' , 'active', 'finished'
      status: "loading",
      questionIndex: 0,
      answerIndex: null,
      points: 0,
      highscore: 0,
      secRemaining: null,
    }
  );

  // this will give total points of all question
  const maxPossiblePoints = questions.reduce(
    (pre, curr) => pre + curr.points,
    0
  );
  useEffect(() => {
    fetch("http://localhost:8000/questions")
      .then((res) => res.json())
      .then((questionData) =>
        dispatch({ type: ACTIONS.DATARECEIVED, payload: questionData })
      )
      .catch(() => dispatch({ type: ACTIONS.DATAFAILED }));
  }, []);

  // console.log(questions);

  return (
    <div>
      <Header />
      <Main>
        {status === "loading" && <Loader />}
        {status === "error" && <Error />}
        {status === "ready" && (
          <HomePage questions={questions} dispatch={dispatch} />
        )}
        {status === "active" && (
          <>
            {/* This makes React throw away the old <Question /> component and mount a new one whenever questionIndex changes. That fixes the “old highlight still showing” bug */}
            <ProgressBar
              questionIndex={questionIndex}
              questions={questions}
              points={points}
              maxPossiblePoints={maxPossiblePoints}
              answerIndex={answerIndex}
            />
            <Question
              key={questionIndex}
              questions={questions}
              questionIndex={questionIndex}
              dispatch={dispatch}
              answerIndex={answerIndex}
            />
            <>
              <div
                style={
                  {
                    // display: "flex",
                    // justifyContent: "center",
                    // gap: "1rem", // space between NextButton and Timer
                    // alignItems: "center", // vertically center them
                  }
                }
              >
                <NextButton
                  dispatch={dispatch}
                  answerIndex={answerIndex}
                  questions={questions}
                  questionIndex={questionIndex}
                />
                <Timer dispatch={dispatch} secRemaining={secRemaining} />
              </div>
            </>
          </>
        )}

        {status === "finished" && (
          <FinishScreen
            points={points}
            maxPossiblePoints={maxPossiblePoints}
            highscore={highscore}
            dispatch={dispatch}
          />
        )}
      </Main>
    </div>
  );
};

export default ReactQuizApp;

/*
Exactly 👌 — let’s break it clearly:

🔹 Where mapping happens

In ReactQuizApp → you are not mapping questions. You just render one <Question /> at a time (based on questionIndex).

In SingleQuestion → you are mapping the options to buttons. That’s where key is required for each <button>.

🔹 So why key={questionIndex} in <Question />?

Even though you’re not mapping there, React sometimes reuses the same component instance when props change.
Example:

First render → questionIndex = 0

Next render → questionIndex = 1
React sees “oh, it’s still <Question />” and doesn’t remount the component, just reuses it → old styles/DOM can stick.

Adding key={questionIndex} tells React:

“This <Question /> is a different component every time the index changes. Throw away the old one and make a fresh one.”

That forces a reset of internal state/highlights. ✅

🔹 So the answer

In ReactQuizApp → key={questionIndex} when rendering <Question /> (to reset whole question).

In SingleQuestion → key on each <button> inside .map (to keep option list stable).

👉 Would you like me to show you a final integrated version of all three (ReactQuizApp, Question, SingleQuestion) with both keys in the right places, so you can just drop it in?
*/
