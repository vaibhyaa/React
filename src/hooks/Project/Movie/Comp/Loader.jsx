import React from "react";

const Loader = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "200px",
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "#ff6600",
          letterSpacing: "2px",
          animation: "pulse 1.5s infinite",
        }}
      >
        <h2>LOADING....!</h2>
      </div>
    </>
  );
};

export default Loader;
