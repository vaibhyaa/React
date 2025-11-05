/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Logo from "../../State/Project/Travel-list/Logo";
import "./Pizza.css";

const Order = ({ orderObj }) => {
  // console.log(props);
  return (
    <>
      <div className="order">
        <p className="footer">
          {orderObj.time}:- We'r open until {orderObj.closeHour}:00 Come visit
          us or order online
        </p>
        <button className="btn">Order</button>
      </div>
    </>
  );
};

export default Order;
