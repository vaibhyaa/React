import React from "react";
import { useState } from "react";

const FirstExample = () => {
  const [User, setUser] = useState([
    { name: "John", age: 14 },
    { name: "jill", age: 38 },
    { name: "jack", age: 79 },
  ]);

  return (
    <>
      <ul>
        {User.map((user) => (
          <li key={user.name}>
            {user.name} : {user.age}
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => setUser([...User, { id: ``, name: "sv", age: 34 }])}
        >
          ADD USER..
        </button>
      </div>
    </>
  );
};

export default FirstExample;
