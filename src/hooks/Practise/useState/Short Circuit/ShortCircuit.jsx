import React, { useState } from "react";
import { use } from "react";

const ShortCircuit = () => {
  const [Login, setLogin] = useState(true);
  const [user, setUser] = useState("");
  const [clearUser, setclearUser] = useState(false);
  return (
    <>
      <center>
        <div>
          <h1>Welcome to the short circuit evaluation...!</h1>
          {Login && <p>You are logined in ...!</p>}
          {user ? `Hello ${user}` : ""}

          <div>
            <button onClick={() => setLogin(!Login)}>
              {Login ? "Hide login state...!" : "Show login state...!"}
            </button>
            {user.trim() == "" ? (
              <button onClick={() => setUser("Vaibhav shinde")}>
                Set user..!
              </button>
            ) : (
              <button onClick={() => setUser("")}>Clear user..!</button>
            )}
            {/* <button onClick={() => setUser("")}>Clear user...!</button> */}
          </div>
        </div>
      </center>
    </>
  );
};

export default ShortCircuit;

// logical OR( || )
// SYNTEAX : expression || expression2
//rule : if expression is truthy , return expression. otherwise expression2

// logical AND ( && )
// syntex : expression && expression2
// rule : if expression is falsy , return expresion1 otherwise expression2

// Notes
// false, 0, "", null, undefined, and NaN are falsy
// Everything else is truthy
