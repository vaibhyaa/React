import React, { useState } from "react";

const CounterApp = () => {
  console.log("this is counter app com ");

  const [Count, setCount] = useState(0);
  return (
    <>
      <div>
        <button
          onClick={() => {
            setCount((currentCount) => currentCount - 1);
          }}
        >
          Decrement
        </button>
        <h1>{Count}</h1>
        <button
          onClick={() => {
            setCount((currentCount) => currentCount + 1);
          }}
        >
          Increment
        </button>
      </div>
      <SmallComp />
    </>
  );
};

export function SmallComp() {
  console.log("this is child comp.....!");

  return <></>;
}

export default CounterApp;
