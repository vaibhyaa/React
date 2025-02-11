import React, { useState } from "react";

const DateCounter = () => {
  const [Count, setCount] = useState(0);
  const [Step, setStep] = useState(1);

  const date = new Date();
  date.setDate(date.getDate() + Count);

  return (
    <>
      <center>
        <div>
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
        <div>
          <button
            onClick={() => {
              if (Count > 0) {
                setCount((currentCount) => currentCount - 1);
              }
            }}
          >
            -
          </button>
          Count: {Count}
          <button
            onClick={() => {
              setCount((currentCount) => currentCount + 1);
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
          <span>
            {Count === 0
              ? `Today is `
              : Count > 0
              ? `${Count} days from today is `
              : `${Count} days ago was`}
          </span>
          <span>{date.toDateString()}</span>
        </p>
      </center>
    </>
  );
};

export default DateCounter;
