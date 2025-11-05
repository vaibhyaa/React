import React from "react";
import "../Movie.css";

const NumResults = ({ movies }) => {
  return (
    <p className="num-results">
      Found <strong>{movies?.length ?? 0}</strong> results
    </p>
  );
};

export default NumResults;
