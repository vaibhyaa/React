import React from "react";
import { useSelector } from "react-redux";
import {} from "./Bank Account/Features/Customer/CustomerOperations";
import CreateCustomer from "./Bank Account/Features/Customer/CreateCustomer";
import CreateAccount from "./Bank Account/Features/Account/CreateAccount";
import CustomerName from "./Bank Account/Features/Customer/CustomerName";

const ReduxApp = () => {
  const fullName = useSelector((state) => state.Customer.fullName);

  const divstyle = {
    width: "350px",
    padding: "20px",
    margin: "30px auto",
    border: "1px solid #ddd",
    borderRadius: "10px",
    background: "#fafafa",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
    fontFamily: "Arial",
  };

  // return <>{fullName === "" ? <CreateCustomer /> : <></>}</>;
  return fullName === "" ? (
    <>
      <CreateCustomer />
      {/* <CreateAccount /> */}
    </>
  ) : (
    <div style={divstyle}>
      <CustomerName />
      <CreateAccount />
    </div>
  );
};

export default ReduxApp;
