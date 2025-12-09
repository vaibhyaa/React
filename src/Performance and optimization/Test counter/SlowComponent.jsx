import React from "react";

const SlowComponent = () => {
  const words = Array.from({ length: 100_000 }, () => "WORD");
  return (
    <div>
      {words.map((word, i) => {
        return <li key={i}>{word}</li>;
      })}
    </div>
  );
};

export default SlowComponent;
