import React, { useEffect } from "react";
import { useState } from "react";

const WindowWidth = () => {
  const [windowwidth, setwindowwidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setwindowwidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("resize", () => {
        setwindowwidth(window.innerWidth);
      });
      console.log("removed");
    };
  }, []);

  return <div>{windowwidth}</div>;
};

export default WindowWidth;
