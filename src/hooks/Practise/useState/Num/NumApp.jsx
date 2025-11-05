import React from "react";
import CounterApp from "./CounterApp";
import { NumericCounter } from "./NumericCounter";

const NumApp = () => {
  console.log('parent component...!');
  
  return (
    <>
      <CounterApp />
      {/* <NumericCounter /> */}
    </>
  );
};

export default NumApp;
