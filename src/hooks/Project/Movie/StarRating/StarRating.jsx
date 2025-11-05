import React from "react";
import { useState } from "react";
import { FaStar } from "react-icons/fa";

// setting default value from props
const StarRating = ({
  maxRating = 5,
  mesages = [],
  setusermovieRating,
  usermovieRating,
}) => {
  // const [rating, setrating] = useState(0); //this state was defined for local use in this component
  const [hover, sethover] = useState(0);

  // const displayValue = hover > 0 ? hover : usermovieRating;
  const displayValue = hover || usermovieRating;

  const showMessage =
    mesages.length === maxRating && displayValue > 0
      ? mesages[displayValue - 1]
      : displayValue > 0
      ? displayValue
      : "";

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0px", // space between stars and number
          fontSize: "18px",
          fontWeight: "bolder",
        }}
      >
        <div
        // style={{ display: "flex", gap: "8px" }}
        >
          {/* here i in index of array and insex values start from 0 if we put i then it will start from 0 so we always put i+1  stars usually go from 1 to 5, not 0 to 4. */}
          {Array.from({ length: maxRating }, (_, i) => (
            <FaStar
              //   color={i + 1 <= displayValue ? "#facc15" : "#e5e7eb"}
              color={i + 1 <= displayValue ? "#facc15" : "#e5e7eb"}
              onClick={() => {
                sethover(i + 1), setusermovieRating(i + 1);
              }} // click updates parent state
              onMouseEnter={() => {
                sethover(i + 1);
              }} // temporary hover value
              onMouseLeave={() => {
                sethover(0);
              }}
              // onClick={() => {
              //   // lock the clicked rating
              //   setusermovieRating(starValue);
              // }}
              // onMouseEnter={() => {
              //   // show preview temporarily
              //   sethover(starValue);
              // }}
              // onMouseLeave={() => {
              //   // only reset hover, keep clicked rating safe
              //   sethover(0);
              // }}
              key={i}
            />
          ))}
        </div>
        <p style={{ fontSize: "40px" }}>
          {/* {showMessage} */}
          {/* {mesages.length === maxRating
            ? mesages[(hover || rating) - 1]
            : hover || rating || ""} */}
          {/* {mesages.length === maxRating
            ? mesages[displayValue - 1]
            : displayValue || ""} */}
          {/* {mesages.length === maxRating && displayValue > 0
            ? mesages[displayValue - 1]
            : displayValue || ""} */}
        </p>
        {/* hover effect if hover rating is not present the show the clicked
        rating if both are not then show empty string If hover has a value
        (e.g., user is hovering over a star), show that. If hover is null or
        0, then check rating (i.e., the selected value). If both hover and
        rating are null or 0, then show "" (an empty string, meaning show
        nothing). */}
      </div>
    </>
  );
};

export default StarRating;

// You use e.target.value (or event.target.value) whenever you're handling user input — typically inside an onChange handler for form fields like <input>, <select>, or <textarea>.

// | Element Type                | Usage Example                    |
// | --------------------------- | -------------------------------- |
// | `<input />`                 | `setState(e.target.value)`       |
// | `<select>`                  | `setOption(e.target.value)`      |
// | `<textarea>`                | `setDescription(e.target.value)` |
// | `<input type="checkbox" />` | `setChecked(e.target.checked)`   |

// this is for why we used i+1 eveywhere instead of i
// | `i` (index) | `i + 1` (user rating) |
// | ----------- | --------------------- |
// | 0           | 1                     |
// | 1           | 2                     |
// | 2           | 3                     |
// | 3           | 4                     |
// | 4           | 5                     |
