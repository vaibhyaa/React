import React from "react";
import { useState } from "react";
// const users = [
//   { name: "Smith", age: 43 },
//   { name: "Jack", age: 34 },
//   { name: "angel", age: 24 },
//   { name: "charles", age: 34 },
// ];

const Users = () => {
  const [users, setusers] = useState([
    { name: "Smith", age: 43 },
    { name: "Jack", age: 34 },
    { name: "angel", age: 24 },
    { name: "charles", age: 34 },
  ]);

  //   console.log(users.length);
  const averageAge =
    users.reduce((accum, currEle) => accum + currEle.age, 0) / users.length;

  return (
    <>
      <div>
        <h1>Users List...!</h1>
        <ul>
          {users.map((eachUser) => (
            <li key={Math.random()}>
              <p>{eachUser.name}</p>
              <p>{eachUser.age}</p>
            </li>
          ))}
        </ul>
        <p>Total Users: {users.length}</p>
        {/* This is derived state ...! */}
        <p>Average age...! : {averageAge}</p>
        <button
          onClick={() => {
            setusers((currentUser) => [
              ...currentUser,
              { name: "abc", age: 34 },
            ]);
          }}
        >
          ADD USER
        </button>
      </div>
    </>
  );
};

export default Users;








//  Comparison: Inline vs Reference
// Use Case	JSX Code	Description
// Pass reference	onClick={sayHi}	No args — function runs on click
// Call inline with args	onClick={() => sayHi("John")}	Runs on click — lets you use arguments
// Bad (calls immediately)	onClick={sayHi("John")}	❌ Calls during render — don’t use like this


// Golden Rule:
// Use onClick={() => fn()} when passing arguments.
// Use onClick={fn} if no arguments are needed.
