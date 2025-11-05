// eslint-disable-next-line no-unused-vars
// import React from "react";
import Menu from "./Menu";
import Header from "./Header";
import Footer from "./Footer";
import "./Pizza.css";

const Pizza = () => {
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
