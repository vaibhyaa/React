import React, { useState } from "react";

const StateArray2 = () => {
  const [Users, setUsers] = useState([
    { name: "John", age: 14 },
    { name: "jill", age: 38 },
    { name: "john", age: 79 },
  ]);
  // This line declares a state variable Users (array of objects), and a setter function setUsers.
  // Initial state: an array of 3 users with name and age.

  const [AddUser, setAddUser] = useState({ name: "", age: "" });
  // This line declares a state object AddUser, which is used to store the current input field values (before they’re submitted).

  function handleSubmit(e) {
    e.preventDefault();
    if (!AddUser.name || !AddUser.age) {
      return;
    }
    // setUsers((currentState) => [...currentState], AddUser);
    // addUser is already an object no need to create the new object to store
    setUsers((currentUserState) => [...currentUserState, AddUser]);

    setAddUser({ name: "", age: "" });
  }
  return (
    <>
      <>
        <label htmlFor="">Add name...</label>
        <input
          type="text"
          name="name"
          value={AddUser.name}
          onChange={(e) =>
            setAddUser((currentState) => ({
              ...currentState,
              name: e.target.value,
            }))
          }
        />
      </>
      <>
        <label htmlFor="">Add age...</label>
        <input
          type="text"
          value={AddUser.age}
          name="age"
          onChange={(e) =>
            setAddUser((currentState) => ({
              ...currentState,
              age: e.target.value,
            }))
          }
        />
      </>
      <>
        <div>
          <button onClick={handleSubmit}>Add user</button>
        </div>
      </>

      <div>
        <ul>
          {Users.map((user) => (
            <li key={user.age}>
              {user.name} : age is {user.age}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default StateArray2;
