import React, { useState } from "react";

const LiftstateUp = () => {
  const [inputValue, setinputValue] = useState("");
  return (
    <div>
      <InputComponent inputValue={inputValue} setinputValue={setinputValue} />
      <DisplayComponent inputValue={inputValue} />
    </div>
  );
};

export function InputComponent({ inputValue, setinputValue }) {
  return (
    <>
      {/* <p>{inputValue}</p> */}
      <input
        type="text"
        value={inputValue}
        onChange={(e) => {
          setinputValue(e.target.value);
        }}
        placeholder="Type here...!"
      />
    </>
  );
}

function DisplayComponent({ inputValue }) {
  return (
    <>
      <p>The value is : = {inputValue}</p>
    </>
  );
}

export default LiftstateUp;
