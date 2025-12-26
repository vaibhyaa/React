import React from "react";
import { connect, useSelector } from "react-redux";

function formatCurrency(value) {
  return new Intl.NumberFormat("en", {
    style: "currency",
    currency: "USD",
  }).format(value);
}

const BalanceDisplay = () => {
  //   const account = useSelector((store) => store.Account);
  const balance = useSelector((store) => store.Account.balance);
  return (
    <>
      <div className="balance">{formatCurrency(balance)}</div>
    </>
  );
};

// function mapStateToProps(state) {
//   return {
//     balance: state.Account.balance,
//   };
// }

// export default connect(mapStateToProps)(BalanceDisplay);
export default BalanceDisplay;
