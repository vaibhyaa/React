import React, { useEffect, useState } from "react";

const ReactUseEffect = () => {
  const [count, setcount] = useState(0);
  useEffect(() => {
    console.log("Hello UseEffect..!");
	console.log(count);
	

    // return () => {
    //   second
    // }
  }, []);

// Even though React re-renders the component every time the state changes (like increment),
// the code inside useEffect with empty dependency array [] runs ONLY ONCE,
// right after the component mounts (i.e., after the initial render completes).
// That's why the log happens only once, not on every re-render.

  return (
    <>
      <h1>Hello ,ReactUseEffect</h1>
      <div>
        <h1>UseEffect</h1>
        <p>Count :{count}</p>
        <button onClick={() => setcount(count + 1)}>increment..!</button>
      </div>
    </>
  );
};

export default ReactUseEffect;
