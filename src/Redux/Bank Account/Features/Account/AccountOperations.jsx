const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

function reducerFunAccount(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };

    case "account/convertingCurrency":
      return { ...state, isLoading: true };
    /*
    Example:
    If you deposit 30:

      balance = 0 (old) + 30 (payload)
      balance = 30

    Later if you deposit 100:

      balance = 30 (old) + 100 (payload)
      balance = 130
  */

    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    /*
    Example:
    If your balance is 130 and you withdraw 10:

      balance = 130 (old) - 10 (payload)
      balance = 120

    Later if you withdraw 70:

      balance = 120 (old) - 70 (payload)
      balance = 50
  */

    case "account/requestLoan":
      if (state.loan > 0) return state;

      return {
        // copies all existing properties of the current state into a new object.
        ...state,
        // Now this overwrites the loan property in the new object.
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };

    case "account/payLoan":
      return {
        ...state,
        loan: 0,
        loanPurpose: "",
        balance: state.balance - state.loan,
      };

    default:
      return state;
  }
}

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

export function deposit(DepositeAmount, currency) {
  if (currency === "USD") {
    return { type: "account/deposit", payload: DepositeAmount };
  }
  // middleware
  return async function (dispatch, getState) {
    dispatch({ type: "account/convertingCurrency" });
    //API CALL
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${DepositeAmount}&from=${currency}&to=USD`
    );
    if (!res.ok) throw new Error("Currency conversion failed");
    const data = await res.json();
    const converted = data.rates.USD;
    // console.log(converted,data)
    //ACTION
    dispatch({ type: "account/deposit", payload: converted });
  };
}

// export function deposit(depositAmount, currency) {
//   // ✅ No conversion needed
//   if (currency === "USD") {
//     return {
//       type: "account/deposit",
//       payload: depositAmount,
//     };
//   }
//   return async function (dispatch) {
//     try {
//       // start loading
//       dispatch({ type: "account/convertingCurrency" });

//       // API call
//       const res = await fetch(
//         `https://api.frankfurter.app/latest?amount=${depositAmount}&from=${currency}&to=USD`
//       );

//       if (!res.ok) throw new Error("Currency conversion failed");

//       const data = await res.json();
//       const converted = data.rates.USD;
//       dispatch({
//         type: "account/deposit",
//         payload: converted,
//       });
//     } catch (error) {
//       console.error(error);
//       dispatch({ type: "account/conversionFailed" });
//     }
//   };
// }

export function withdraw(WithdramAmount) {
  return { type: "account/withdraw", payload: WithdramAmount };
}
export function requestLoan(LoanAmount, Purpose) {
  return {
    type: "account/requestLoan",
    payload: { amount: LoanAmount, purpose: Purpose },
  };
}
export function payLoan() {
  return {
    type: "account/payLoan",
  };
}

//   add 500 in acount
//   store.dispatch(deposit(500));
//   console.log(store.getState());

//   then request a loan of 1000 for mobile and add the 1000 in current balance
//   store.dispatch(requestLoan(1000, "Buy a mobile "));
//   console.log(store.getState());export

//then clear a loan
//   store.dispatch(payLoan());
//   console.log(store.getState());

//then deposit 200 from the current balance
//   store.dispatch(withdraw(200));
// console.log(store.getState());

export default reducerFunAccount;
