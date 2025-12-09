/* eslint-disable react/prop-types */
import React, { useState } from "react";
// import SlowComponent from "./SlowComponent";

//(important point ) a best and surprising optimization trick with children
// function Counter({ children }) {
//   const [count, setcount] = useState(0);
//   return (
//     <div>
//       <h1>slow counter</h1>
//       <button onClick={() => setcount((c) => c + 1)}>increase :{count}</button>
//       {children}
//     </div>
//   );
// }

const Test = ({ children }) => {
  const [count, setcount] = useState(0);
  return (
    <div>
      <h1>slow counter</h1>
      <button onClick={() => setcount((c) => c + 1)}>increase :{count}</button>
      {/* <SlowComponent /> */}
      {children}
    </div>
  );
  // return (
  //   <>
  //     <Counter>
  //       <SlowComponent />
  //     </Counter>
  //   </>
  // );
};

export default Test;
