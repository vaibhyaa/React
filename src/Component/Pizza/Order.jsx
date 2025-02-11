/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";


const Order = ({closeHour,time}) => {
  return (
    <>
      <div className="order">
        <p className="footer">
          {time}:- We'r open until {closeHour}:00 Come visit us or order online
        </p>
        <button className="btn">Order</button>
      </div>
    </>
  );
};

export default Order;
