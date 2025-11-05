import React, { useEffect, useState } from "react";

const ResourceType = () => {
  const [resourceType, setresourceType] = useState("");
  const [items, setitems] = useState([]);

  //   console.log("everty time click component render..!");

  // 1)
  //   useEffect will run after every render, not just when resourceType changes.
  // So clicking the same button repeatedly will still trigger the effect, even if the state value doesn’t change
  //   useEffect(() => {
  //     console.log("only resource type changed ");

  //     // fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     //   .then((response) => response.json())
  //     //   .then((json) => console.log(json));

  //     //  return () => {
  //     //    second;
  //     // };
  //   });

  // 2)
  // The effect will run only once, right after the component mounts. not after anything render or any value changes only once at first when component mount.
  // It will not run again when resourceType changes or when the component re-renders
  // This is perfect for:
  // Fetching initial data once (like loading app settings).
  // Setting up subscriptions or timers that should only be created once.
  // Initial logging.
  //   useEffect(() => {
  //     console.log("only resource type changed ");

  //     // fetch("https://jsonplaceholder.typicode.com/todos/1")
  //     //   .then((response) => response.json())
  //     //   .then((json) => console.log(json));

  //     //  return () => {
  //     //    second;
  //     // };
  //   }, []);

  // 3)
  //   this useeffect code will reun when resourcetype value changes (dependency array )
  // Once on mount (because resourceType is initialized).
  // Again every time resourceType changes
  useEffect(() => {
    //   console.log("only resource type changed ");
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setitems(json));

    return () => {
      console.log("removed whatever we run ru time as cleanud up ");
    };
  }, [resourceType]);

  //Now console.log will run only after items changes.
  useEffect(() => {
    console.log(items);

    //   return () => {
    // 	second
    //   }
  }, [items]);

  return (
    <>
      <div>
        <button onClick={() => setresourceType("posts")}>Posts</button>
        <button onClick={() => setresourceType("users")}>users</button>
        <button onClick={() => setresourceType("comments")}>comments</button>
      </div>
      <h1>resource type:- {resourceType}</h1>
      <div>
        <ul>
          {/* if you use curly braces {} in map, you must explicitly return something: */}
          {items.map((eachItem) => {
            return (
              <>
                {/* <li>{eachItem}</li> */}
                <pre>{JSON.stringify(eachItem)}</pre>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default ResourceType;

// clean up functio flow :-
// Component mounts → useEffect runs → fetch happens.
// User clicks to change resourceType.
// Before running the new fetch, React runs your cleanup:
// console.log('removed whatever we run runtime as cleanup');
// New fetch happens with the updated resourceType.
// If the component is removed from the UI entirely → cleanup runs one last time

// const [mode, setMode] = useState(3); // 1, 2, or 3
// useEffect(() => {
//   if (mode === 1) {
//     console.log("Every render");
//   } else if (mode === 2) {
//     console.log("Once on mount");
//   } else if (mode === 3) {
//     if (resourceType) {
//       fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
//         .then(res => res.json())
//         .then(json => console.log(json));
//     }
//   }
// }, mode === 1 ? undefined : mode === 2 ? [] : [resourceType]);
