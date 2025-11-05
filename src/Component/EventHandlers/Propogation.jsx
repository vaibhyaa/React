import React from "react";

const Propogation = () => {
  return (
    <>
      <div
        style={{
          border: "1px black solid",
          height: "100px",
          width: "500px",
          backgroundColor: "blue",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => {
          console.log("Grandparent clicked...!");
        }}
      >
        <div
          style={{
            border: "1px black solid",
            height: "50px",
            width: "300px",
            backgroundColor: "red",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
          onClick={() => {
            console.log("parent clicked...!");
          }}
        >
          <div
            style={{
              border: "1px black solid",
              height: "25px",
              width: "250px",
              backgroundColor: "yellow",
            }}
            onClick={(event) => {
              console.log("Child clicked...!");
			  event.stopPropagation();
            }}
          ></div>
        </div>
      </div>
    </>
  );
};

export default Propogation;
