import React, { Children } from "react";
import { useEffect } from "react";
import { ACTIONS } from "../ReactQuizApp";

const Timer = ({ dispatch, secRemaining }) => {
  useEffect(() => {
    if (secRemaining <= 0) return;
    const interval = setInterval(() => {
      dispatch({ type: ACTIONS.TICK });
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  return <p>{secRemaining} sec</p>;
};

export default Timer;
