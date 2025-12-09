import { useReducer } from "react";
import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};
function reducerFunCustomer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/createCustomer":
      return {
        ...state,
        fullName: action.payload.fullName,
        // this equals to FullNme
        nationalId: action.payload.nationalId,
        // this equals to NationalId
        createdAt: action.payload.createdAt,
        // createdAt: new Date().toISOString(),
      };

    case "customer/updateName":
      return {
        ...state,
        fullName: action.payload.fullNamee,
        // this equals to FullNme
        // nationalId: action.payload.nationalId,
        // // this equals to NationalId
        // createdAt: new Date().toISOString(),
      };

    default:
      return state;
  }
}

function reducerFunAccount(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposit":
      return { ...state, balance: state.balance + action.payload };
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

const rootReducer = combineReducers({
  // They are simply keys (property names) (Account and Customer ) of the global Redux state object
  Account: reducerFunAccount,
  Customer: reducerFunCustomer,
});
export const store = createStore(rootReducer);

// export const store = createStore(reducerFunAccount, reducerFunCustomer);

// const [state, dispatch] = useReducer(reducer, initialState);
// const [state, dispatch] = useReducer(reducer, {
//   balance: 0,
//   loan: 0,
//   loanPurpose: "",
// });
