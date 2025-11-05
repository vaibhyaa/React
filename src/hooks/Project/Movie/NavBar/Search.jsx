import { useEffect, useRef, useState } from "react";
import "../Movie.css";

export default function Search({ query, setQuery }) {
  const inputELement = useRef(null);
  // useEffect((e) => {
  //   // console.log(inputELement.current);

  //   if (e.code == "Enter") {
  //     inputELement.current.focus();
  //   }

  //   document.addEventListener("keydown", () => {
  //     inputELement.current.focus();
  //   });

  //   return () => {
  //     document.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  useEffect(() => {
    // Focus once on mount
    inputELement.current.focus();

    // Handler for key press
    function handleKeyDown(e) {
      // Example: only focus on Enter key
      if (e.code === "Enter") {
        inputELement.current.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    // Cleanup on unmount
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputELement}
    />
  );
}
