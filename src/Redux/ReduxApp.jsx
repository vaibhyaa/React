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

  function deposit(DepositeAmount) {
    return { type: "account/deposit", payload: DepositeAmount };
  }
  function withdraw(WithdramAmount) {
    return { type: "account/withdraw", payload: WithdramAmount };
  }
  function requestLoan(LoanAmount, Purpose) {
    return {
      type: "account/requestLoan",
      payload: { amount: LoanAmount, purpose: Purpose },
    };
  }
  function payLoan() {
    return {
      type: "account/payLoan",
    };
  }

  //   add 500 in acount
  //   store.dispatch(deposit(500));
  //   console.log(store.getState());

  //   then request a loan of 1000 for mobile and add the 1000 in current balance
  //   store.dispatch(requestLoan(1000, "Buy a mobile "));
  //   console.log(store.getState());

  //then clear a loan
  //   store.dispatch(payLoan());
  //   console.log(store.getState());

  //then deposit 200 from the current balance
  //   store.dispatch(withdraw(200));
  // console.log(store.getState());

  function createCustomer(FullName, NationalId) {
    return {
      type: "customer/createCustomer",
      payload: {
        fullName: FullName,
        nationalId: NationalId,
		createdAt:new Date().toISOString()
      },
    };
  }

  function updateCustomerName(FullName) {
    return {
      type: "customer/updateName",
      payload: {
        fullNamee: FullName,
      },
    };
  }

  store.dispatch(createCustomer("Vaibhav shinde", "Indian"));
  console.log(
    store.getState(),
    "This is basically customer oojbect :",
    store.getState().Customer
  );

  store.dispatch(updateCustomerName("Vaibhav"));
  console.log(
    store.getState(),
    "This is basically customer oojbect :",
    store.getState().Customer
  );

  return null;
};

export default ReduxApp;
