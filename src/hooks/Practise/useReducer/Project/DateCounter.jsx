import React, { useReducer, useState } from "react";

// dispatch → reducer → new state → component update

// function reducer(state, action) {
//   console.log("state", state, "actions", action);
//   //   return state + action;
//   //   if (action.type === "inc") {
//   //     return state + action.payload;
//   //   }

//   //   if (action.type === "dec") {
//   //     return state - action.payload;
//   //   }
//   //   if (action.type === "setCount") {
//   //     return action.payload;
//   //   }
//   //   if (action.type === "reset") {
//   //     return 0;
//   //   }
// }



// It receives whatever React stored internally (i.e., the same value as states)
function reducer(states, action) {
  // console.log(states, action);
  switch (action.type) {
    case "inc":
      return { ...states, count: states.count + states.step };

    case "dec":
      return { ...states, count: states.count - states.step };

    case "setCount":
      return { ...states, count: action.payload };

    case "setStep":
      return { ...states, step: action.payload };

    case "reset":
      return { count: 0, step: 1 };

    default:
      return states;
  }
}

const DateCounter = () => {
  //   const [count, setCount] = useState(0);
  //   const [step, setStep] = useState(1);
  const [states, dispatch] = useReducer(reducer, { count: 0, step: 1 });
  //   const { count, step } = states;

  const dateObject = new Date();
  //   console.log(dateObject.getDate()); it will show the present numeric data number
  dateObject.setDate(dateObject.getDate() + states.count);

  return (
    <center>
      <div className="counter">
        {/* Step slider */}
        <div>
          <input
            type="range"
            min="0"
            max="10"
            value={states.step}
            // onChange={(e) => setStep(Number(e.target.value))}
            onChange={(e) =>
              dispatch({ type: "setStep", payload: Number(e.target.value) })
            }
          />
          <span>{states.step}</span>
        </div>
        <div>
          {/* <button onClick={() => setCount((c) => c - step)}>-</button> */}
          <button
            onClick={() => {
              dispatch({ type: "dec" });
            }}
          >
            minus steps {states.step}-
          </button>

          <input
            type="number"
            value={states.count}
            // onChange={(e) => setCount(Number(e.target.value))}
            onChange={(e) => {
              dispatch({ type: "setCount", payload: Number(e.target.value) });
            }}
          />
          {/* <button onClick={() => setCount((c) => c + step)}>+</button> */}
          <button
            onClick={() => {
              dispatch({ type: "inc" });
            }}
          >
            add steps {states.step}+
          </button>
        </div>

        {/* Display shifted date */}
        <p>{dateObject.toDateString()}</p>

        {/* Reset */}
        <div>
          {/* <button
            onClick={() => {
              dispatch({ type: "reset" });
              setStep(1);
            }}
          >
            Reset
          </button> */}
          <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
        </div>
      </div>
    </center>
  );
};

export default DateCounter;



// | Where?            | Variable Name | Meaning                                   |
// | ----------------- | ------------- | ----------------------------------------- |
// | In your component | `states`      | Component state returned by useReducer    |
// | Inside reducer()  | `states`       | Parameter that receives the current state |
