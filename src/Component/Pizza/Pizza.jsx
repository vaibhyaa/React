// eslint-disable-next-line no-unused-vars
import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import "./index.css";
//this is component , jsx and reusability

const Pizza = () => {
  // console.log(pizzaData.pizzas[0].name);
  return (
    <>
      <div className="container">
        <Header />
        <Menu />
        <Footer />
      </div>
    </>
  );
};

export default Pizza;
