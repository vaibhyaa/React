/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */

import { createContext, useContext, useReducer } from "react";

// // create a context by calling the createContext function of react
export const AuthContext = createContext();

// this are the initial state when the app starts
const initialState = {
  user: null,
  isAuth: false,
};

// This acts as your “mock database user”
// If someone logs in using these credentials, they get “authenticated.”
const FAKE_USER = {
  name: "Jack",
  email: "jack@example.com",
  password: "qwerty",
  avatar: "https://i.pravatar.cc/100?u=zz",
};

// // define a context provider component
// // it will need to accept childern prop
// // so that we can use this provider component as top level component in the app component
// // name should be different than context name
const AuthProvider = ({ children }) => {
  // console.log(children);
  const [{ user, isAuth }, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "login":
        return { ...state, user: action.payload, isAuth: true };

      case "logout":
        return { ...state, user: null, isAuth: false };

      default:
        throw new Error("unknown error");
    }
  }, initialState);

  // | Action     | What happens   | New State                              |
  // | ---------- | -------------- | -------------------------------------- |
  // | `"login"`  | User logs in   | `{ user: FAKE_USER, isAuth: true }`    |
  // | `"logout"` | User logs out  | `{ user: null, isAuth: false }`        |
  // | Default    | Invalid action | Throws an error (helps catch mistakes) |

  // login funciton
  function login(email, password) {
    if (email === FAKE_USER.email && password === FAKE_USER.password) {
      // Since your email and password match, it triggers:
      dispatch({ type: "login", payload: FAKE_USER });
      //  So now:
      // user = FAKE_USER object
      // isAuth = true
      // This updates the context’s internal state.
      // ✅ Since AuthContext.Provider passes { user, isAuth, login, logout },
      // → Every component using useContext(AuthContext) now gets the updated isAuth = true
    } else {
      alert("Invalid credentials!");
    }
  }
  // It checks if the input matches the fake user’s credentials.
  // If yes → calls dispatch() to set isAuth = true and user = FAKE_USER.
  // If not → shows an alert.

  
  // logout function (simply resets everything back to initialState)
  function logout() {
    dispatch({ type: "logout" });
  }
  return (
    <AuthContext.Provider value={{ user, isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };

// function useAuth() {
//   const context = useContext(AuthContext);
//   if (context === undefined) {
//     throw new Error("auth context is used outside the auth provider ");
//   }
//   return context;
// }
