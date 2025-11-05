import React, { useState } from "react";

const DateCounter = () => {
  const [Count, setCount] = useState(0);
  const [Step, setStep] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + Count);

  return (
    <>
      <center>
        <div className="step">
          <button
            onClick={() => {
              setStep(Step - 5);
            }}
          >
            -
          </button>
          step : {Step}
          <button
            onClick={() => {
              setStep(Step + 5);
            }}
          >
            +
          </button>
        </div>
        <div className="counter">
          <button
            onClick={() => {
              // if (Count > 0) {
              // setCount((currentCount) => currentCount - 1);
              // connected this updated step state value to count we are substracting how many step values from count value
              setCount((currentCount) => currentCount - Step);
              // }
            }}
          >
            -
          </button>
          Count: {Count}
          <button
            onClick={() => {
              // setCount((currentCount) => currentCount + 1);
              // connected this updated step state value to count we are adding how many step values from count value
              setCount((currentCount) => currentCount + Step);
            }}
          >
            +
          </button>
        </div>
        <div>
          <p>Count :{Count}</p>
          <p>Step :{Step}</p>
        </div>
        <p>
          <span
            style={{
              color: "red",
            }}
          >
            {Count === 0
              ? `Today is:- `
              : Count > 0
              ? `${Count} days from today is:- `
              : `${Math.abs(Count)} days ago was:- `}
          </span>
          <span>
            <b>{date.toDateString()}</b>
          </span>
        </p>
      </center>
    </>
  );
};

export default DateCounter;
