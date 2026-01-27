/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";
import styled from "styled-components";
const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  text-align: center;
  color: red;
`;

const Button = styled.button`
  font-size: 1.2rem;
  padding: 1.2rem 1.6rem;
  font-weight: 500;
  border: 7px;
  background-color: purple;
  color: white;
  margin: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  border: solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyleApp = styled.div`
  background-color: orange;
  padding: 20px;
`;

const WildOasisApp = () => {
  return (
    <>
      <StyleApp>
        hello world
        <H1>VAIBHAV</H1>
        <Button onClick={() => alert("check in ")}>Check In</Button>
        <Button onClick={() => alert("check out ")}>Check Out</Button>
        <Input type="number" placeholder="Number of guests"></Input>
        <Input type="number" placeholder="Number of guests"></Input>
      </StyleApp>
    </>
  );
};

export default WildOasisApp;
