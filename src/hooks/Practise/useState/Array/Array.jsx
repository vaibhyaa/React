import React, { useState } from "react";

const Array = () => {
  const [name, setname] = useState(["vaibhav", "shinde", "lingnoor"]);
  const [user, setuser] = useState("");

  // function addUser(e) {
  //   setuser(e.target.value);
  // }

  function submit() {
    if (user.trim()) {
      // user.trim removes the spaces before and after the name
      // Check if the username already exists
      if (name.includes(user)) {
        alert("Username already exists!");
      } else {
        setname([...name, user]);
        setuser(""); // Clear the input field after adding
      }
    } else {
      alert("Name cannot be empty!");
    }
  }

  function removeUser(userId) {
    // Filter out the user to be removed
    //  new array created for users
    const updatedNamesList = name.filter((eachName) => eachName !== userId);
    setname(updatedNamesList); // Update the state with the new list
    //  console.log(updatedNamesList);
  }

  return (
    <>
      <h1>Add Name</h1>
      <input
        onChange={(e) => setuser(e.target.value)}
        type="text"
        placeholder="Add Name...!"
        value={user}
      />
      <div>
        {name.map((eachName) => (
          <li key={eachName}>
            {eachName}
            <span onClick={() => removeUser(eachName)}> ✖️</span>
          </li>
        ))}
      </div>
      <button onClick={submit} type="button">
        ADD NAME
      </button>
    </>
  );
};

export default Array;
