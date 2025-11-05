/* eslint-disable react/prop-types */

import { useState } from "react";
import ButtonUi from "./ButtonUi";

const FormSplitBillUi = ({ selectedFriend, onSplitBill }) => {
  // console.log(selectedFriend);

  const [bill, setbill] = useState("");
  const [paidByUser, setpaidByUser] = useState("");
  const [whoIsPaying, setwhoIsPaying] = useState("user");

  const paidByFriend = bill ? bill - paidByUser : "";

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === "user" ? paidByFriend : -paidByFriend);
  }

  return (
    <>
      <form className="form-split-bill" action="" onSubmit={handleSubmit}>
        <h2
          style={{
            fontSize: "25px",
            fontWeight: "bolder",
            fontFamily: "initial",
            textTransform: "uppercase",
          }}
        >
          split a bill with {selectedFriend.name}
        </h2>

        <label htmlFor="">Bill value</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setbill(Number(e.target.value))}
        />

        <label htmlFor="">Your expense</label>
        <input
          type="text"
          value={paidByUser}
          onChange={(e) =>
            setpaidByUser(
              Number(e.target.value) > bill
                ? paidByUser
                : Number(e.target.value)
            )
          }
        />

        <label htmlFor="">{selectedFriend.name} expense</label>
        <input type="text" disabled value={paidByFriend} />

        <label htmlFor="">Who is paying the bill</label>
        <select value={bill} onChange={(e) => setwhoIsPaying(e.target.value)}>
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>

        <ButtonUi>Split bill</ButtonUi>
      </form>
    </>
  );
};

export default FormSplitBillUi;
