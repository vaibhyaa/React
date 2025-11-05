import React from "react";

const ErrorMessage = ({ message }) => {
  return (
    <div
      style={{
        backgroundColor: "#ffe6e6",
        color: "#cc0000",
        padding: "12px 20px",
        borderRadius: "8px",
        border: "solid #ff4d4d",
        fontWeight: "bold",
        textAlign: "center",
        maxWidth: "500px",
        // margin: "4px apx",
        boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
      }}
    >
      ❌ Error: {message}
    </div>
  );
};

// style={{
//   backgroundColor: "#ffe6e6",
//   color: "#cc0000",
//   padding: "12px 20px",
//   borderRadius: "8px",
//   border: "1px solid #ff4d4d",
//   fontWeight: "bold",
//   textAlign: "center",
//   maxWidth: "500px",
//   margin: "20px auto", // centers and adds spacing
//   boxShadow: "0px 4px 6px rgba(0,0,0,0.1)",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center"
// }}
export default ErrorMessage;
