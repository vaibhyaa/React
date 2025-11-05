import React from "react";
import "../style.css";

const Header = () => {
  // simple presentational component
  return (
    <>
      <header>
        <img
          src="https://imgs.search.brave.com/DU3Yz5ErIiS0iHmgTeArdTWG9JgILClu-3YfIX9i8io/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjMv/MDgvUmVhY3QtTG9n/by01MDB4MjgxLnBu/Zw"
          alt="React Logo"
        />
        <h1>The React quiz</h1>
      </header>
    </>
  );
};

export default Header;
