import React from "react";
import { useContext } from "react";
import { ThemeContext } from "./ContextApiApp";

const FunctionContextComp = () => {
  // consuming the context value 
  // this the imp hook of react useContext
  // never pass ThemeContext. here any values ust pass the whole context
  // if we have onject with multiple values in darktheme then we can destructure the object 
  const darkTheme = useContext(ThemeContext);
  console.log(darkTheme);

  return (
    <div
      style={{
        height: "300px",
        width: "300px",
        backgroundColor: darkTheme ? "blue" : "white",
        color: darkTheme ? "white" : "black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        border: "1px solid red",
      }}
    >
      <h3>{darkTheme ? "function theme dark" : "function theme light"}</h3>
    </div>
  );
};

export default FunctionContextComp;
