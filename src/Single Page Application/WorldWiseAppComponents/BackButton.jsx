import React from "react";
import Button from "./Button";
import { Navigate, useNavigate } from "react-router-dom";

const BackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={(e) => {
        // prevent from submitting the form and reload the page
        e.preventDefault();
        navigate(-1);
      }}
      type="back"
    >
      &larr; Back
    </Button>
  );
};

export default BackButton;
