import React, { useState } from "react";

const RandomNo = () => {
  const [number, setnumber] = useState(() => Math.floor(Math.random() * 100));
  return (
    <div>
      {number}
      <div>
        <button
          onClick={() => {
            const no = Math.floor(Math.random() * 100);
            setnumber(no);
          }}
        >
          GENERATE NO...
        </button>
      </div>
    </div>
  );
};

export default RandomNo;
