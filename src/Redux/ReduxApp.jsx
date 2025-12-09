import React from "react";
import { store } from "./Bank Account/store";

const ReduxApp = () => {
  console.log("heyyy redux");

  //   store.getState() (NOT Store.getState()) is a Redux method that simply returns the current state object from the Redux store

  store.dispatch({ type: "account/deposit", payload: 5000 });
  console.log(store.getState());

  //   Store.dispatch({ type: "account/withdraw", payload: 300 });
  //   console.log(store.getState());

  store.dispatch({
    type: "account/requestLoan",
    payload: { amount: 1000, purpose: "Buy a car" },
  });
  console.log(store.getState());

  //   if i wanted to pass more loan the loan shoudl be array[] in initail state
  //   store.dispatch({
  //     type: "account/requestLoan",
  //     payload: { amount: 10, purpose: "Buy a mobile" },
  //   });
  //   console.log(store.getState());

  store.dispatch({
    type: "account/payLoan",
  });
  console.log(store.getState());

  return null;
};

export default ReduxApp;
