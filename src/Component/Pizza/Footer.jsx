/* eslint-disable no-unused-vars */
// import React from "react";
import "./Pizza.css";
import Order from "./Order";
import Close from "./Close";

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
      {/* this is conditional rendering with && */}
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

      {/* this is conditional rendering with ternaries */}
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

      {/* if open is true the show Ordercomponent and ignore the closecomponent and if isopen is false the show closecomponent and ignore ordercomponent*/}
      {/* 1st method passing each value seperate props  */}
      {/* {isOpen ? (
        <Order
          time={time}
          hour={hour}
          openHour={openHour}
          closeHour={closeHour}
          isOpen={isOpen}
        />
      ) : (
        <Close openHour={openHour} time={time} closeHour={closeHour} />
      )} */}

      {/* passing orderObj and closeObj as object props */}
      {/* all the seperate time values kept in object {} and assign that object to orderObj and closeObj as this the props */}
      {/* conditional rendering with ternaries example */}
      {isOpen ? (
        <Order
          orderObj={{
            time,
            hour,
            openHour,
            closeHour,
            isOpen,
          }}
        />
      ) : (
        <Close
          closeObj={{
            time,
            hour,
            openHour,
            closeHour,
            isOpen,
          }}
        />
      )}
    </footer>
  );
};

export default Footer;
