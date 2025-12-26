import { useReducer } from "react";
import { applyMiddleware, combineReducers, createStore } from "redux";
import reducerFunAccount from "./Features/Account/AccountOperations";
import reducerFunCustomer from "./Features/Customer/CustomerOperations";
import { thunk } from "redux-thunk";

const rootReducer = combineReducers({
  // They are simply keys (property names) (Account and Customer ) of the global Redux state object
  Account: reducerFunAccount,
  Customer: reducerFunCustomer,
});
export const store = createStore(rootReducer, applyMiddleware(thunk));

// const [state, dispatch] = useReducer(reducer, initialState);
// const [state, dispatch] = useReducer(reducer, {
//   balance: 0,
//   loan: 0,
//   loanPurpose: "",
// });
