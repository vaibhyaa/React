import React from "react";
import "./Pizza.css";

const Close = ({ closeObj }) => {
  return (
    <div>
      <div className="footer">
        <p className="order">
          {closeObj.time}:- We are happy to welcome you between{" "}
          {closeObj.openHour}:00 and {closeObj.closeHour}:00
        </p>
      </div>
    </div>
  );
};

export default Close;
