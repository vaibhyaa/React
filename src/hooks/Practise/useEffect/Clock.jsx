import { useState, useEffect } from "react";

const Clock = () => {
  const [time, settime] = useState(new Date().toLocaleTimeString());

  // const updatedDate = new Date();
  // settime(updatedDate.toLocaleTimeString());

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedDate = new Date();
      settime(updatedDate.toLocaleTimeString());
      console.log(interval);
    }, 1000); // update every 1 second

    //this cleanup part needed to clean the previous memory usesage again after rendering
    // cleanup
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <h2>Current Time: {time}</h2>;
};

export default Clock;
