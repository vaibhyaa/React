/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./index.css";
const PizzaComponent = (props) => {

  if (props.pizzaObj.soldOut) {
    return null
  }



  
  //applied two ways 
  // 1)
  return (

    // <li className="pizza">
    //   <img src={props.img} alt={props.name} />
    //   <div className="">
    //     {/* <h2>{props.name}</h2> */}
    //     <h3>{props.name}</h3>
    //     <p style={{display:'inline'}}>{props.ingredients}</p>
    //   </div>
    // </li>



    //2)
    <li className="pizza">
    <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
    <div className="">
      {/* <h2>{props.name}</h2> */}
      <h3>{props.pizzaObj.name}</h3>
      <p style={{display:'inline'}}>{props.pizzaObj.ingredients}</p>
    </div>
  </li>
  );
};

export default PizzaComponent;
