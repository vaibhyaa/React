import React from "react";
import { useState } from "react";

const MultipleInputsState = () => {
  const [users, setusers] = useState([
    { name: "John", age: 14, password: "svdv " },
    { name: "jill", age: 38, password: "svdvthgxcv " },
    { name: "josh", age: 79, password: "svdvjb " },
  ]);

  const [addUser, setaddUser] = useState({
    name: "",
    age: "",
    password: "",
  });

  // When you type into the name or age input fields, you're assigning those values into the addUser object through setAddUser
  function handleChange(e) {
    const { name, value } = e.target;
    setaddUser((currentUsersState) => ({
      ...currentUsersState,
      [name]: value,
    }));
  }

  // When you click the submit button, the addUser object is added to the User array using the setUser state updater
  function handleSubmit(e) {
    e.preventDefault();

    // Validation (optional)
    if (!addUser.name || !addUser.age || !addUser.password) return;

    // Add new user
    setusers((currentUsers) => [...currentUsers, addUser]);

    // Reset form
    setaddUser({
      name: "",
      age: "",
      password: "",
    });
  }
  return (
    <>
      <div>
        <form action="">
          <div>
            <label htmlFor="">NAME : </label>
            <input
              type="text"
              value={addUser.name}
              onChange={handleChange}
              name="name"
            />
          </div>
          <div>
            <label htmlFor="">AGE : </label>
            <input
              type="text"
              value={addUser.age}
              onChange={handleChange}
              name="age"
            />
          </div>
          <div>
            <label htmlFor="">PASSWORD : </label>
            <input
              type="text"
              value={addUser.password}
              onChange={handleChange}
              name="password"
            />
          </div>
          <div>
            {/* 
          This button is used to submit the form data. 
          While typing in the input fields, we're only updating the state (`addUser`) — 
          we're just preparing the data in memory.

            When the "Add" button is clicked, we take that state and 
             actually add it to the existing `User` array (or whatever data structure you're using).

           Think of `addUser` like a draft form you're filling out.
          Clicking "Submit" is like officially saving that draft into the final user list — 
           similar to submitting a form to a database in a real-world app.
          */}
            <button onSubmit={handleSubmit}>SUMBIT</button>
          </div>
        </form>
      </div>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.name}>
              {user.name} : age is : {user.age}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default MultipleInputsState;
