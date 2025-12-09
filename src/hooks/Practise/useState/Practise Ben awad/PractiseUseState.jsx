import React, { useState } from "react";

// Lazy Initialization
// Because useState(expensiveInitialState) → React calls the function only once, when the component mounts.
// This is called lazy initialization → used for heavy calculations / expensive operations.
// function expensiveInitialState() {
//   console.log("this is expensive initial state ...");
//   // it does some calculation , loops , conditions and
//   return 10;
// }

// THS IS IMPORTANT :-
// What Should Be Kept Outside a React Component?
// Expensive Functions:-
// Keep heavy computations outside so they don't run on every render.

// Utility Functions / Helper Functions:-
// If a function does not depend on component props/state, move it outside.

// API Service Functions:-
// Keep API calls in separate files like /services/api.js.

// Constants:-
// Any fixed values should not be inside components.

// Static Data:-
// Data that never changes.

// Reducer Functions (for useReducer):-
// Always place reducer outside component.

// Custom Hooks:-
// Hooks go in a separate /hooks folder.

// Component-Level Styles (CSS-in-JS objects):-
// If style is static → move outside.

// Context Providers Defaults
// Context initial values should be outside.

// Reusable Objects
// If an object never changes, define it outside.

const PractiseUseState = () => {
  //   const [initialValue, setinitialValue] = useState(expensiveInitialState);
  //   **State initializer function**
  const [initialValue, setinitialValue] = useState(() => {
    console.log("Here lot of calculation , loops , conditions and then ..");
    return 10;
  });
  //   initialValue is 10
  return (
    <>
      <div>{initialValue}</div>
      <button
        onClick={() => {
          console.log("setter function is gettlign called ehrn clicked ...");
          setinitialValue((prevSt) => {
            const incrementVl = prevSt + 1;
            console.log(incrementVl);
            return incrementVl;
          });
        }}
      >
        Click me
      </button>
    </>
  );
};

export default PractiseUseState;

// What Should NOT Be Outside Component?
// 🔥 1. Anything that depends on props
// Must stay inside.

// 🔥 2. Anything that depends on state
// Must stay inside.

// 🔥 3. Functions that use hooks
// Hooks work only inside components or custom hooks.

// | Item                        | Should it be outside component? | Why                            |
// | --------------------------- | ------------------------------- | ------------------------------ |
// | Expensive functions         | ✅ Yes                           | Prevents re-run on render      |
// | Utility functions           | ✅ Yes                           | Reusable + cleaner             |
// | API functions               | ✅ Yes                           | Separation of concerns         |
// | Reducers                    | ✅ Yes                           | Standard practice              |
// | Constants                   | ✅ Yes                           | Prevent recreation             |
// | Static data                 | ✅ Yes                           | Performance                    |
// | useState initial function   | ✅ Yes                           | Avoid expensive recalculations |
// | Functions using state/props | ❌ No                            | Needs component context        |
// | Hooks                       | ❌ No (unless custom hook file)  | Hooks must follow rules        |

// Do things placed outside the component render only once?
// ✔ YES — they run only once when the file is loaded,
// NOT every time the component re-renders.

// Because:
// React components re-render
// But the file (module) itself is executed only once
// This is called JavaScript module scope.

// Flow:
// Page loads
// JS module loads
// expensiveInitialState is created once (definition)
// Component renders
// useState calls expensiveInitialState once
// On re-render
// ✔ React does NOT call expensiveInitialState again
// ✔ React reuses old value

// 🧠 VERY IMPORTANT DISTINCTION:
// ❗ Code outside component runs only once
// (because file loads once)
// ❗ Code inside component runs on every render
// (because React function component is re-executed)

// | Location of code                 | Runs once? | Runs every render? | Why                                     |
// | -------------------------------- | ---------- | ------------------ | --------------------------------------- |
// | **Outside component**            | ✅ Yes      | ❌ No               | Module loads once                       |
// | **Inside component (top-level)** | ❌ No       | ✅ Yes              | Component = function, runs every render |
// | **Inside useEffect with []**     | ✅ Yes      | ❌ No               | Runs on initial mount only              |
// | **State initializer function**   | ✅ Yes      | ❌ No               | Lazy init calls once                    |

// Anything kept outside the component:
// Is created only once
// Is not re-created during re-renders
// Is shared across all renders of that component

// BUT…
// ❗ It still can run multiple times if you call it yourself from inside the component.
// Example:
// expensiveInitialState(); // will run on every render

// Because you triggered it.
// 📌 Summary (Super Simple)
// Outside component = module scope = runs once

// ✔ Definitions
// ✔ Expensive functions
// ✔ Constants
// ✔ Utility functions
// ✔ Reducers

// Inside component = render scope = runs every render

// ✔ JSX
// ✔ Logic
// ✔ console.log inside component
// ✔ derived values
