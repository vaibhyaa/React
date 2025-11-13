import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/FakeAuthContext";
import Button from "../../WorldWiseAppComponents/Button";
import PageNav from "../../WorldWiseAppComponents/PageNav";
import styles from "./Login.module.css";
import React, { useEffect, useState } from "react";
import { useContext } from "react";

// Login.jsx → UI for logging in, gets login() function and isAuth state from context.
// FakeAuthContext.jsx → The authentication logic (who’s logged in, how to log in/out, etc.).
// React Router’s useNavigate → Handles navigation when the user logs in successfully.
export default function Login() {
  // PRE-FILL FOR DEV PURPOSES
  const [email, setEmail] = useState("jack@example.com");
  const [password, setPassword] = useState("qwerty");
  const { login, isAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  // At this moment
  //   login → function from context (not called yet)
  // isAuth → false (from initialState)

  useEffect(() => {
    // Now that isAuth turned true, this effect runs → and React Router navigates you to the /app route
    if (isAuth === true) {
      navigate("/app", { replace: true });
    }
  }, [isAuth, navigate]);

  return (
    <main className={styles.login}>
      <PageNav />
      <form
        className={styles.form}
        // so you clicked login button
        // So, it calls the login() function from your context (which you defined inside AuthProvider)
        onSubmit={(e) => {
          e.preventDefault();
          // email and password values passed from user inputs and email and password states
          if (email && password) {
            login(email, password);
          }
        }}
      >
        <div className={styles.row}>
          <label htmlFor="email">Email address</label>
          <input
            type="email"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className={styles.row}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <div>
          <Button type="primary">Login</Button>
        </div>
      </form>
    </main>
  );
}

// | Step | Source                     | Action                                              | Target                              |
// | ---- | -------------------------- | --------------------------------------------------- | ----------------------------------- |
// | 1    | `Login.jsx`                | User enters email/password                          | Local component state               |
// | 2    | `Login.jsx`                | Calls `login(email, password)`                      | Function from `AuthContext`         |
// | 3    | `FakeAuthContext.jsx`      | Verifies credentials                                | Calls `dispatch({ type: "login" })` |
// | 4    | Reducer                    | Updates state → `{ isAuth: true, user: FAKE_USER }` | Context provider updates            |
// | 5    | React                      | Re-renders all components using `AuthContext`       | `Login.jsx` sees `isAuth=true`      |
// | 6    | `useEffect` in `Login.jsx` | Detects `isAuth=true`                               | Navigates to `/app`                 |
