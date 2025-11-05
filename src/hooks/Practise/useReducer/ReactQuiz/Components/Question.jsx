import React from "react";
import "../style.css";
import SingleQuestion from "./SingleQuestion";

const Question = ({ questions, questionIndex, dispatch, answerIndex }) => {
  //   console.log(questions);
  return (
    <>
      <p>{questions[questionIndex].question}</p>

      <SingleQuestion
        questions={questions}
        questionIndex={questionIndex}
        dispatch={dispatch}
        answerIndex={answerIndex}
      />
      {/* <div>
        {questions[questionIndex].options.map((eachOption) => {
          return <button>{eachOption}</button>;
        })}
      </div> */}

      {/* {questions[index].map((eachQue) => {
        console.log(eachQue);
        return <p key={eachQue.id}>{eachQue.question}</p>;
      })} */}
    </>
  );
};

export default Question;
