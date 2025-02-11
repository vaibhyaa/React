import React from "react";
import "./index.css";

const Header = () => {
  const headerStyle = {
    // color:'red',
    // fontSize:'48px',
    // textTransform:'uppercase'
  };
  return (
    <>
      <header  className="header footer">
        <h1 style={headerStyle}>
          Fast React Pizza co.
        </h1>
      </header>
    </>
  );
};

export default Header;
