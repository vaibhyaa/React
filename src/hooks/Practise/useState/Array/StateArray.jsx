import React, { useState } from "react";

const StateArray = () => {
  const [user, setUser] = useState([
    { name: "jack", age: 15 },
    { name: "jill", age: 20 },
    { name: "john", age: 25 },
  ]);

  const [addName, setaddName] = useState("");
  const [addAge, setaddAge] = useState("");

  return (
    <>
      {/* 
     Use <form> + onSubmit + button type="submit" if you want both Enter and click to work (recommended).
     ❌   Use a <div> + onClick if you want to block Enter behavior.
      Let me know if you'd like a custom behavior (e.g., Enter adds but Shift+Enter skips)*/}

      {/* onSubmit → only works with <form> <button type="submit"> works inside the form */}
      <form>
        <div>
          <label htmlFor="">Add name : </label>
          <input
            type="text"
            value={addName}
            // When you type into the name input fields, you're assigning those values into the addName object through setAddName
            onChange={(e) => setaddName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="">Add age : </label>
          <input
            type="text"
            value={addAge}
            // When you type into the age input fields, you're assigning those values into the addAge object through setAddAge
            onChange={(e) => setaddAge(e.target.value)}
          />
        </div>
        <div>
          <button
            type="submit"
            // When you click the submit button, the addUser object is added to the User array using the setUser state updater
            onClick={(e) => {
              e.preventDefault(); // Prevent page reload on form submit

              if (!addName || !addAge) {
                alert("Please provide both name and age.");
                return;
              }

              // create variable to store the latest user values come from input
              // const newUser = { name: addName, age: Number(addAge) };

              setUser((currentUserState) => [
                ...currentUserState,
                { name: addName, age: Number(addAge) },
              ]);

              // set to default
              setaddName("");
              setaddAge("");
            }}
          >
            Submit user
          </button>
        </div>
      </form>
      <ul>
        {user.map((user) => (
          <li key={user.name}>
            {user.name} age is : {user.age}
          </li>
        ))}
      </ul>
    </>
  );
};

export default StateArray;

// notes
// What it does:
// This is inside your <input type="text" /> for entering the name.
// Every time the user types something, this runs:
// e is the event object from the input.
// e.target is the actual <input> element.
// e.target.value is the current text inside that input.
// setaddName(...) updates the React state with that text.
// What it does ;
// You're creating a new object called newUser using the current values from your input fields:
// addName (from state) is assigned to name.
// addAge (also from state) is converted to a number using Number(...), and assigned to age.
// Example:
// If addName = "John" and addAge = "25" (a string),
// React uses controlled inputs, so we track each field (addName, addAge) in state.
// Then on submit, we gather that state into an object (newUser) to save it in the array.
