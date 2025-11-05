import React from "react";
import { useState } from "react";

const AdvancedCounter = () => {
  const [count, setcount] = useState(0);
  const [step, setstep] = useState(1);
  return (
    <>
      <center>
        <div>
          <h1>UseState Challange</h1>
          <div>
            <p>Count : {count}</p>
            <>
              <label htmlFor="">Steps : </label>
              <input
                value={step}
                onChange={(e) => setstep(Number(e.target.value))}
              />
            </>
          </div>
          <button onClick={() => setcount((preC) => preC + step)}>
            Increment
          </button>
          <button onClick={() => setcount((preC) => preC - step)}>
            Decrement
          </button>
          <button
            onClick={() => {
              setcount(0), setstep(1);
            }}
          >
            Reset
          </button>
        </div>
      </center>
    </>
  );
};

export default AdvancedCounter;
