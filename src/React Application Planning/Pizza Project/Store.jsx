import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./features/cart/cartSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
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
