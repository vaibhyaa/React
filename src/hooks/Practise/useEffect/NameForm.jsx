import React, { useEffect, useState } from "react";

const NameForm = () => {
  const [count, setcount] = useState(0);
  const [name, setname] = useState("");

//   useEffect(() => {
//     console.log("name is:-", name);

//     // return () => {
//     //   second;
//     // };
//   }, [name]);

  return (
    <div>
      <h1>UseEffect Challenge</h1>
      <div>
        <h1>Count:{count}</h1>
        <button onClick={() => setcount(count + 1)}>increment..!</button>
      </div>
      <div>
        <h1>NAME: {name}</h1>
        <input
          value={name}
          type="text"
          onChange={(e) => {
            console.log("name is:-", e.target.value);
            setname(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default NameForm;
