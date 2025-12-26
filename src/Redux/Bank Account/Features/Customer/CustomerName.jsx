import React from "react";
import { useSelector } from "react-redux";

const CustomerName = () => {
  const customer = useSelector((store) => store.Customer);

  const nameStyle = {
    marginTop: "15px",
    padding: "12px",
    background: "#e8f5e9",
    borderRadius: "8px",
    color: "#2e7d32",
    fontSize: "15px",
    border: "1px solid #c8e6c9",
  };

  return (
    <div style={nameStyle}>
      {" "}
      {customer.fullName && <p>Customer Saved: {customer.fullName}</p>}
    </div>
  );
};

export default CustomerName;
