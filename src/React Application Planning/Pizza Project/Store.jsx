import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    // this are the name user and cart which we use in useSelector to get state
    // in cartslice we have state.cart.cart  first cart is comes from here and second cart is in cartslice initialstate
    user: userReducer,
    cart: cartReducer,
  },
});

export default store;

// Use Redux when:
// Auth data (user, token)
// Cart, theme, language
// Data shared across many components
// ❌ Don’t use Redux for:
// Simple local form state
// Temporary UI state
