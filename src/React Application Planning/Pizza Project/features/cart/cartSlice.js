import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //   cart: [],
  // totalPrice:0,
  cart: [
    // {
    //   pizzaId: 12,
    //   name: "Mediterranean",
    //   quantity: 2,
    //   unitPrice: 32,
    // },
  ],
};


// This cartSlice is responsible for:
// ✔ Storing cart items
// ✔ Adding/removing pizzas
// ✔ Increasing/decreasing quantity
// ✔ Calculating totals
// ✔ Exposing reusable selectors for any component



// This automatically:
// Creates action types
// Creates action creators
// Creates the reducer

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      // payload = newItem
      state.cart.push(action.payload);
    },
    deleteItem(state, action) {
      // payload will be pizzaId
      state.cart = state.cart.filter(
        (eachItem) => eachItem.pizzaId !== action.payload
      );
    },
    increaseItemQuantity(state, action) {
      // payload is pizzaID
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (!item) return;
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decreaseItemQuantity(state, action) {
      // payload is pizzaID
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      if (!item) return;
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    clearCart(state, action) {
      state.cart = [];
    },
  },
});


// this are actiosn which we export to use in component to dispatch
export const {
  addItem,
  deleteItem,
  increaseItemQuantity,
  decreaseItemQuantity,
  clearCart,
} = cartSlice.actions;


// state.cart   ← key name in configureStore
export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getTotalCartQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);

export const getCartItemById = (pizzaId) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === pizzaId);

export const getTotalCrtPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
// reselet library
