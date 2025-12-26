import { createSlice } from "@reduxjs/toolkit";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
  isLoading: false,
};

export function deposit(depositAmount, currency) {
  // If currency is USD → The function returns a plain Redux action object
  // ✅ No conversion needed
  if (currency === "USD") {
    return {
      type: "account/deposit",
      payload: depositAmount,
    };
  }
  // If currency is NOT USD ( EUR, etc.)
  // This function inside gets called, and receives dispatch
  // dispatch(deposit(1000, "EUR"))
  return async function (dispatch) {
    try {
      // start loading
      dispatch({ type: "account/convertingCurrency" });
      // Before calling API → tell Redux we are converting currency
      // So UI can show "loading…" message

      // API call
      // Calls a real-time FX exchange API
      // Converts the depositAmount FROM user currency EURO → TO USD
      const res = await fetch(
        `https://api.frankfurter.app/latest?amount=${depositAmount}&from=${currency}&to=USD`
      );

      if (!res.ok) throw new Error("Currency conversion failed");

      const data = await res.json();
      // Extract converted USD amount:
      const converted = data.rates.USD;

      // After converting → finally deposit converted amount like first step
      // Initial balance = 0
      // ↓
      // dispatch(deposit(100, "EUR"))
      // ↓
      // API converts → 100 EUR = 108.50 USD
      // ↓
      // Redux adds 108.50 to balance
      // Final balance = 108.50
      // isLoading = false

      dispatch({
        type: "account/deposit",
        payload: converted,
      });
    } catch (error) {
      console.error(error);
      dispatch({ type: "account/conversionFailed" });
    }
  };
}

const accountSlice = createSlice({
  name: "account",
  initialState: initialStateAccount,
  reducers: {
    // name/deposite i.e account/deposite
    // RTK uses Immer, so you can mutate the state directly and Redux Toolkit internally converts it into immutable state
    // dont need to destructure object first and then return new state object

    // deposite a money
    deposit(state, action) {
      state.balance = state.balance + action.payload;
      state.isLoading = false;
    },

    // withdraw a money
    withdraw(state, action) {
      state.balance = state.balance - action.payload;
    },

    // request a loan
    // RTK-generated action creators only accept ONE argument.
    // But you need to dispatch two values — amount and purpose
    requestLoan: {
      prepare(loanAmount, loanPurpose) {
        return { payload: { loanAmount, loanPurpose } };
      },

      reducer(state, action) {
        if (state.loan > 0) return;
        // we dont to modify the state directly in redux toolkit as it uses immer library internally to handle immutability
        // so we dont need to return a new state object
        {
          state.loan = action.payload.loanAmount;
          state.loanPurpose = action.payload.loanPurpose;
          state.balance = state.balance + action.payload.loanAmount;
        }
      },
    },

    // pay a loan
    payLoan(state) {
      state.balance = state.balance - state.loan;
      state.loan = 0;
      state.loanPurpose = "";
    },
    convertingCurrency(state) {
      state.isLoading = true;
    },
  },
});

export const { withdraw, requestLoan, payLoan } = accountSlice.actions;
export default accountSlice.reducer;
