import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createCustomer } from "./CustomerOperations";

const CreateCustomer = () => {
  const [fullName, setfullName] = useState("");
  const [nationalId, setnationalId] = useState("");

  const dispatch = useDispatch();

  const containerStyle = {
    width: "350px",
    padding: "20px",
    margin: "30px auto",
    border: "1px solid #ddd",
    borderRadius: "10px",
    background: "#fafafa",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial",
  };

  const headingStyle = {
    textAlign: "center",
    marginBottom: "20px",
    color: "#333",
  };

  const formStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  };

  const inputStyle = {
    padding: "10px",
    fontSize: "15px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  };

  const buttonStyle = {
    padding: "10px",
    background: "#007bff",
    border: "none",
    color: "white",
    fontSize: "16px",
    borderRadius: "6px",
    cursor: "pointer",
  };
  return (
    <>
      <div style={containerStyle}>
        <h2 style={headingStyle}>Create Customer</h2>

        <form
          style={formStyle}
          onSubmit={(e) => {
            e.preventDefault();
            if (!fullName || !nationalId) return;
            dispatch(createCustomer(fullName, nationalId));
            setfullName("");
            setnationalId("");
          }}
        >
          {/* Full Name */}
          <input
            style={inputStyle}
            type="text"
            placeholder="Enter Full Name"
            value={fullName}
            onChange={(e) => setfullName(e.target.value)}
          />

          {/* National ID */}
          <input
            style={inputStyle}
            type="text"
            placeholder="Enter National ID"
            value={nationalId}
            onChange={(e) => setnationalId(e.target.value)}
          />

          {/* Created At (auto generated, readonly) */}

          <input
            style={inputStyle}
            type="text"
            value={new Date().toISOString()}
            readOnly
          />

          <button style={buttonStyle} type="submit">
            Create
          </button>
        </form>

        {/* {customer.fullName && <p>Customer Saved: {customer.fullName}</p>} */}
      </div>
    </>
  );
};

export default CreateCustomer;
