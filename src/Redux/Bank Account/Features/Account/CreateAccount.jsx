import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deposit, payLoan, requestLoan, withdraw } from "./AccountOperations";
import BalanceDisplay from "./BalanceDisplay";

const CreateAccount = () => {
  const [depositAmount, setDepositAmount] = useState("");
  const [withdrawAmount, setWithdrawAmount] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [loanPurposeText, setLoanPurposeText] = useState("");
  const [currency, setCurrency] = useState("USD");

  const dispatch = useDispatch();
  const account = useSelector((store) => store.Account);
  const customer = useSelector((store) => store.Customer);
  
  // const boxStyle = {
  //   padding: "20px",
  //   border: "1px solid #ddd",
  //   width: "350px",
  //   marginTop: "20px",
  //   borderRadius: "10px",
  //   background: "#fafafa",
  //   boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  //   fontFamily: "Arial",
  // };

  const headingStyle = {
    marginBottom: "10px",
    color: "#333",
  };

  const inputStyle = {
    padding: "12px 10px",
    width: "90%",
    margin: "8px 0",
    border: "1px solid #d0d7de",
    borderRadius: "8px",
    fontSize: "15px",
    outline: "none",
    backgroundColor: "#fff",
    transition: "border-color 0.2s ease, box-shadow 0.2s ease",
  };

  const buttonStyle = {
    padding: "10px",
    width: "100%",
    background: "red",
    color: "white",
    border: "none",
    marginTop: "8px",
    borderRadius: "6px",
    cursor: "pointer",
    fontSize: "15px",
  };

  const payLoanBtnStyle = {
    ...buttonStyle,
    background: account.loan === 0 ? "#999" : "#28a745",
    cursor: account.loan === 0 ? "not-allowed" : "pointer",
    marginTop: "12px",
  };

  const sectionStyle = {
    marginTop: "15px",
    paddingTop: "10px",
    borderTop: "1px solid #eee",
  };

  const name = {
    background: "#1976d2",
    color: "white",
    padding: "10px 15px",
    borderRadius: "6px",
    fontSize: "18px",
    fontWeight: "600",
    textAlign: "center",
    marginTop: "10px",
  };

  return (
    <>
      <div>
        <h2 style={headingStyle}>Account Dashboard</h2>
        <h4 style={name}>Welcome {customer.fullName}</h4>

        {/* Balance */}
        <BalanceDisplay />

        {/* Loan Info */}
        {account.loan > 0 && (
          <p>
            <strong>Loan:</strong> ₹{account.loan} ({account.loanPurpose})
          </p>
        )}

        {/* Deposit */}
        <div style={sectionStyle}>
          <input
            style={inputStyle}
            type="number"
            placeholder="Deposit Amount"
            value={depositAmount}
            onChange={(e) => setDepositAmount(e.target.value)}
          />
          <select
            style={{
              width: "100%",
              padding: "10px",
              marginTop: "6px",
              borderRadius: "6px",
              border: "1px solid #ccc",
              fontSize: "15px",
              backgroundColor: "#fff",
              cursor: "pointer",
              outline: "none",
            }}
            value={currency}
            onChange={(e) => setCurrency(e.target.value)}
          >
            <option value="USD">US doller</option>
            <option value="EUR">Euro</option>
            <option value="GBp">British Pound</option>
          </select>
          <button
            style={{ ...buttonStyle, background: "#28a745" }}
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              if (!depositAmount) {
                return null;
              }
              dispatch(deposit(Number(depositAmount), currency));
              setDepositAmount("");
              setCurrency("USD");
            }}
          >
            {account.isLoading
              ? "Converting currency..."
              : `Deposit $ ${Number(depositAmount) || ""}`}
          </button>
        </div>

        {/* Withdraw */}
        <div style={sectionStyle} onSubmit={() => {}}>
          <input
            style={inputStyle}
            type="number"
            placeholder="Withdraw Amount"
            value={withdrawAmount}
            onChange={(e) => setWithdrawAmount(e.target.value)}
          />
          <button
            style={buttonStyle}
            onClick={(e) => {
              e.preventDefault();
              if (withdrawAmount > account.balance) return;
              dispatch(withdraw(Number(withdrawAmount)));
              setWithdrawAmount("");
            }}
            type="submit"
          >
            Withdraw
          </button>
        </div>

        {/* Loan Request */}
        <div style={sectionStyle} onSubmit={() => {}}>
          <input
            style={inputStyle}
            type="number"
            placeholder="Loan Amount"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
          />

          <input
            style={inputStyle}
            type="text"
            placeholder="Loan Purpose"
            value={loanPurposeText}
            onChange={(e) => setLoanPurposeText(e.target.value)}
          />

          <button
            style={buttonStyle}
            onClick={(e) => {
              e.preventDefault();
              dispatch(requestLoan(Number(loanAmount), loanPurposeText));
              setLoanAmount("");
              setLoanPurposeText("");
            }}
            type="submit"
          >
            Request Loan
          </button>
        </div>

        {/* Pay Loan */}
        <button
          style={payLoanBtnStyle}
          onClick={(e) => {
            e.preventDefault();
            dispatch(payLoan());
          }}
          disabled={account.loan === 0}
        >
          Pay Loan
        </button>
      </div>
    </>
  );
};

export default CreateAccount;
