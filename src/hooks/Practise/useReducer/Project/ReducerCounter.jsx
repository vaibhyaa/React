import React, { useReducer } from "react";
import { useState } from "react";

const ReducerCounter = () => {

  const [states, dispatch] = useReducer(
    // state refers to the same thing to states (initial state storage variable )
    (state, action) => {
      // console.log(state, action);
      switch (action.type) {
        case "increment":
          // Take the old state object,
          // Copy all of its properties (...state),
          // But replace the count property with a new value → state.count + 1
          return { ...state, count: state.count + 1 };
        case "decrement":
          return { ...state, count: state.count + 1 };
        case "toggle":
          return { ...state, hidden: !state.hidden };
        default:
          return state;
      }
    },
    { count: 0, hidden: true }
  );
  // so state ={ count: 0, hidden: true }
  //and dispatch takes some keys and trigger thei reducer funciton ()=>{}

  return (
    <>
      {/* <button onClick={() => setcount(count + 1)}>+</button> */}
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>

      {/* <button onClick={() => setcount(count - 1)}>-</button> */}
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
      {/* <button onClick={() => sethidden(!hidden)}> */}
      <button
        onClick={() => {
          dispatch({ type: "toggle" });
        }}
      >
        {states.hidden ? "Hide" : "show"}
      </button>
      {states.hidden ? <h1>count {states.count}</h1> : <h3>hide</h3>}
    </>
  );
};

export default ReducerCounter;
