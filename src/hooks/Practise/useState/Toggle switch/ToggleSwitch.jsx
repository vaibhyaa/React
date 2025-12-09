import React from "react";
import "./ToggleSwitch.css";
import { useState } from "react";


const ToggleSwitch = () => {
  const [value, setvalue] = useState(false);
  return (
    <div
      className="toggle-switch"
      style={{
        backgroundColor: value ? "#800000" : "#90ee90",
        width: "60px",
        height: "30px",
        borderRadius: "30px",
        position: "relative",
        cursor: "pointer",
        transition: "background-color 0.3s",
      }}
      onClick={() => setvalue(!value)}
    >
      <div
        className="slider"
        style={{
          border: "1px solid gray",
          width: "26px",
          height: "26px",
          backgroundColor: value ? "red" : "green",
          borderRadius: "50%",
          position: "absolute",
          top: "2px",
          left: value ? "32px" : "2px",
          transition: "left 0.3s, background-color 0.3s",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "12px",
        }}
      >
        <center>{value ? "OFF" : "ON"}</center>
      </div>
    </div>
  );
};

export default ToggleSwitch;
