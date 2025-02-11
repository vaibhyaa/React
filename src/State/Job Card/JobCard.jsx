import React, { useState } from "react";
import "./style.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

//first example of state
const JobCard = () => {
  //handelying event in react is easy

  // useState is function wich takes a argument and the argument that we specify is the default value of the state varible
  const [step, setStep] = useState(1); //here default value of state is 1 i.e step=1
  // because of this step useState in this component we can update the step value and it will also sync with ui

  const [isOpen, setisOpen] = useState(true);
  // console.log(isOpen);


  // always Update state based on current state 
  //current state is equal to step 
  function handlePreviousClick() {
    if (step > 1) {
      setStep((currentStep)=>currentStep - 1);
    }
  }

  function handleNextClick() {
    if (step < 3) {
      setStep((currentStep)=>currentStep + 1);
    }
  }

  return (
    <>
      <button className="close"
       onClick={() => 
       setisOpen((isOpen)=>!isOpen)
      // main logic is here we cannot set to false otherwise it will always be false on click 
      // so for that we have to set it to opposite of default/cuttent state 
      // basically when we click if the default is true then make it as false and if it is false then when we click again it should become true 
       }>
        *
      </button>
      {isOpen ? (
        <center>
          <div className="steps">
            <h1>Hello React</h1>
            <div className="numbers">
              <div className={step >= 1 ? "active" : ""}>1</div>
              <div className={step >= 2 ? "active" : ""}>2</div>
              <div className={step >= 3 ? "active" : ""}>3</div>
            </div>
            <p className="message">
              Step :{step} {messages[step - 1]}
            </p>
            <div className="buttons">
              <button
                onClick={handlePreviousClick}
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
              >
                Previous
              </button>
              <button
                onClick={handleNextClick}
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
              >
                Next
              </button>
            </div>
          </div>
        </center>
      ) : (
        <>
          <center>
            <h1>No component</h1>
          </center>
        </>
      )}
    </>
  );
};

export default JobCard;
