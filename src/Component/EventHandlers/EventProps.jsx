import React from "react";

const EventProps = () => {
  //   function HanleWelcomeUser(user) {
  //     alert(`Hey ${user}`);
  //   }

  //   function handleHOver() {
  //     alert("Hovering over...!");
  //   }
  return (
    <>
      <WelcomeUser
        onClickprop={function HandleWelcomeUser(user='Guest') {
          return alert(`Hey ${user}`);
        }}
        // there is difference between between passing reference of function and calling a function
        onMouseEnterprop={function handleHOver() {
          return alert("Hovering over...!");
        }}
      />
    </>
  );
};

function WelcomeUser({ onClickprop, onMouseEnterprop }) {
  return (
    <>
      <button onClick={() => onClickprop("vaibhav")}>Click me...!</button>
      <button onMouseEnter={() => onMouseEnterprop()}>Hover Me....!</button>
      <button
        onClick={() => {
          console.log(`Hey user , welcome....!`);
          onClickprop();
        }}
      >Greetings...!</button>
    </>
  );
}

export default EventProps;
