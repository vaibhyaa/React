import React from "react";

const ProgressBar = ({
  questionIndex,
  questions,
  points,
  maxPossiblePoints,
  answerIndex,
}) => {
  return (
    <header>
      <progress
        max={questions.length}
        value={questionIndex + Number(answerIndex !== null)}
      ></progress>
      {/* here defaulr length of progress br we can set by max property and value property is used for progress 
	    at first value property was zero as questionindex but when we ans the question and click the next question the index become 1 and value becomes 1 and prgress bar shows the progress of 1  
	  */}
      <p>
        Question <strong>{questionIndex + 1}</strong>/{questions.length}
      </p>
      <p>
        <strong>{points}</strong>/{maxPossiblePoints}
      </p>
    </header>
  );
};

export default ProgressBar;
