/* eslint-disable no-unused-vars */
import React from "react";
import "./index.css";
import Order from "./Order";


// logic and jx in component
const Footer = () => {
  const time = new Date().toLocaleTimeString();
  const hour = new Date().getHours();
  const openHour = 15;
  const closeHour = 22;
  // you need to use two separate comparisons joined by a logical &&
  const isOpen = hour >= openHour && hour <= closeHour;





  // JavaScript doesn't allow chaining comparisons like Python
  // const isOpen = openHour <= hour <= closeHour;







  // if (hour >= openHour && hour <= closeHour) {
  //   return (
  //     <>
  //       <footer className="footer">{time} We'r are currenly open...!</footer>
  //     </>
  //   );
  // } else {
  //   return (
  //     <>
  //       <footer className="footer">{time} We'r are closed</footer>
  //     </>
  //   );
  // }

  return (
    <footer>
      {/* if isopen is true second part is rendered only */}
      {/* {isOpen && <p className="footer">{time} We'r are currenly open...!</p>} */}








      {/* {isOpen && (
        <div className="order">
        <p className="footer">
          {time} We'r are open until {closeHour}:00, Come visit us or order
          online....!
        </p>
        <button className="btn">Order</button>
        </div>
      )} */}









      {/* {isOpen ? (
        <div className="order">
          <p className="footer">
            {time}:- We'r are open until {closeHour}:00, Come visit us or order
            online....!
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        // <p>
        //   We are happy to welcome you between {openHour}:00 and {closeHour}:00
        // </p>
        <div className="order">
          <p className="footer">
            {time}:- We are happy to welcome you between {openHour}:00 and{" "}
            {closeHour}:00
          </p>
          <button className="btn">Order</button>
        </div>
      )} */}










      {
        isOpen ? <Order time={time} hour={hour} openHour={openHour} closeHour={closeHour} isOpen={isOpen}/>:(
          <div className="order">
          <p className="footer">
            {time}:- We are happy to welcome you between {openHour}:00 and{" "}
            {closeHour}:00
          </p>
        </div>
        )
      }

    </footer>
  );
};

export default Footer;
