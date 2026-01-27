/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from "react";
import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Heading from "./ui/Heading";
import Row from "./ui/Row";

const StyleApp = styled.div`
  /* background-color: red; */
  padding: 20px;
`;

const WildOasisApp = () => {
  return (
    <>
      <GlobalStyles />
      <StyleApp>
        <Row type="vertical">
          <Row type="horizontal">
            <Heading as="h1">The wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in and out </Heading>
              <Button
                type="primary"
                size="medium"
                onClick={() => alert("check in ")}
              >
                Check In
              </Button>
              <Button
                type="secondary"
                size="small"
                onClick={() => alert("check out ")}
              >
                Check Out
              </Button>
            </div>
          </Row>
          <Row type="vertical">
            <Heading as="h3">Form</Heading>
            <form>
              <Input type="number" placeholder="Number of guests"></Input>
              <Input type="number" placeholder="Number of guests"></Input>
            </form>
          </Row>
        </Row>
      </StyleApp>
    </>
  );
};

export default WildOasisApp;
