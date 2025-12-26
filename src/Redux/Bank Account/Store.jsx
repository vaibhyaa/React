import { configureStore } from "@reduxjs/toolkit";
import reducerFunAccount from "./Features/Account/AccountOperations";
import reducerFunCustomer from "./Features/Customer/CustomerOperations";

export const store = configureStore({
  reducer: {
    Account: reducerFunAccount,
    Customer: reducerFunCustomer,
  },
});
export default store