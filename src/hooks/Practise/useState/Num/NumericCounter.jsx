import React, { useState } from "react";

export const NumericCounter = ({ label }) => {
  console.log('this is numeric counter comp');
  
  // here count variable store the initial value/data
  // and setCount is function to modify the count value according to interactivity
  const [count, setcount] = useState(0);

  // console.log(label, count);

  function increment() {
    setcount((currentCount) => currentCount + 1);
    // console.log(count);
  }

  function decrement() {
    setcount((currentCount) => currentCount - 1);
    // console.log(count);
  }

  return (
    <div>
      <h1>{label}</h1>
      <h1>{count}</h1>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
};

function CounterApp() {
  return (
    <>
      {/* each of this component has its own defined state and linked with another  */}
      {/* whenc component gets destroyed the state of that component also destroyed  */}
      <NumericCounter label="counter-1" />
      <NumericCounter label="counter-2" />
    </>
  );
}

export default CounterApp;
