import React, { useReducer, useState } from "react";

const ACTIONS = {
  INCREMENT: "increment",
  DECREMENT: "decrement",
};

const UsereducerCount = () => {
  // here currentCount and state is same
  const [state, dispatch] = useReducer(
    (currentState, action) => {
      // console.log(currentState);
      // console.log(action);

      switch (action.type) {
        case ACTIONS.INCREMENT:
          return { count: currentState.count + 1 };
        case ACTIONS.DECREMENT:
          return { count: currentState.count - 1 };
        default:
          return currentState;
      }
    },
    { count: 0 }
  );

  // console.log(state);

  return (
    <div>
      Count : {state.count}
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.INCREMENT });
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTIONS.DECREMENT });
        }}
      >
        -
      </button>
    </div>
  );
};

export default UsereducerCount;

// here currentCount and state is same
// ✅ Correct!
// Inside the reducer, you called the parameter currentState.
// Outside, React gives you state.
// They represent the same thing: the current state object.
// Naming is just different because you’re free to call it anything (state, currentState, prevState)
