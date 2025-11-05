import React, { useState } from "react";

const ShowName = () => {
  const [name, setname] = useState("");
  const [storedNames, setstoredNames] = useState([]);
  const [search, setsearch] = useState("");
  const [searchenName, setsearchenName] = useState([]);

  return (
    <div>
      <div>
        <label>Search here ...!</label>
        {/* <p>{search}</p> */}
        <input
          type="Search here..."
          value={search}
          onChange={(e) => setsearch(e.target.value)}
        />
      </div>
      <div>
        <p>Searched item swill appear here....!</p>
      </div>
      <div>
        <br />
      </div>
      <h1>
        Your name :{name}
        <ul>
          {storedNames.map((name) => (
            <li key={name}>{name}</li>
          ))}
        </ul>
      </h1>
      <input
        type="text"
        placeholder="Type Here...!"
        value={name}
        onChange={(e) => setname(e.target.value)}
      />
      <button
        onClick={() => {
          if (storedNames.includes(name.trim())) {
            alert("ALREADY EXISTS...");
          } else {
            setstoredNames((prevNames) => [...prevNames, name.trim()]);
          }
          setname("");
        }}
      >
        Sumbit
      </button>
    </div>
  );
};

export default ShowName;
