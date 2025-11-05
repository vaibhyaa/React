import React, { createContext, useState } from "react";
import FunctionContextComp from "./FunctionContextComp";

// 1. Create context
// here it will return the context
export const ThemeContext = createContext();

const ContextApiApp = () => {
  const [darkTheme, setDarkTheme] = useState(true);
  // console.log(darkTheme);

  return (
    // 1 ) is to provide value to child components
    // this is the way we can pass muitiple props values in value objext (example only)
    // <ThemeContext.Provider value={{
    // name:name,
    // age:age,
    // password:password,
    // this below are both same :
    // setCount,
    // setCount:setCount
    // }}>

    <ThemeContext.Provider value={darkTheme}>
      <button
        onClick={() => {
          setDarkTheme((prevState) => !prevState);
        }}
      >
        Toggle theme
      </button>

      {/* Child component consuming context */}
      <FunctionContextComp />
    </ThemeContext.Provider>
  );
};

export default ContextApiApp;
