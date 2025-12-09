import React from "react";
import { store } from "./Bank Account/store";

const ReduxApp = () => {
  console.log("heyyy redux");

  //store.getState() (NOT Store.getState()) is a Redux method that simply returns the current state object from the Redux store

  //   store.dispatch({ type: "account/deposit", payload: 5000 });
  //   console.log(store.getState());

  //   Store.dispatch({ type: "account/withdraw", payload: 300 });
  //   console.log(store.getState());

  //   store.dispatch({
  //     type: "account/requestLoan",
  //     payload: { amount: 1000, purpose: "Buy a car" },
  //   });
  //   console.log(store.getState());

  //   if i wanted to pass more loan the loan shoudl be array[] in initail state
  //   store.dispatch({
  //     type: "account/requestLoan",
  //     payload: { amount: 10, purpose: "Buy a mobile" },
  //   });
  //   console.log(store.getState());

  //   store.dispatch({
  //     type: "account/payLoan",
  //   });
  //   console.log(store.getState());

  function deposit(depositeAmount) {
    return { type: "account/deposit", payload: depositeAmount };
  }
  function withdraw(withdramAmount) {
    return { type: "account/withdraw", payload: withdramAmount };
  }
  function requestLoan(loanAmount, purpose) {
    return {
      type: "account/requestLoan",
      payload: { amount: loanAmount, purpose: purpose },
    };
  }
  function payLoan() {
    return {
      type: "account/payLoan",
    };
  }

  //   add 500 in acount
  store.dispatch(deposit(500));
  console.log(store.getState());

  //   then request a loan of 1000 for mobile and add the 1000 in current balance
  store.dispatch(requestLoan(1000, "Buy a mobile "));
  console.log(store.getState());

  //then clear a loan
  store.dispatch(payLoan());
  console.log(store.getState());

  //then deposit 200 from the current balance
  store.dispatch(withdraw(200));
  console.log(store.getState());

  return null;
};

export default ReduxApp;
