import React, { useState } from "react";
import StarRating from "./StarRating";

const ShowStarRatingApp = ({ usermovieRating, setusermovieRating }) => {
  return (
    <>
      {/* <StarRating
        maxRating={5}
        mesages={["Terrible", "bad", "Okay", "Good", "Amazing"]}
      /> */}

      <MovieRating usermovieRating={usermovieRating} setusermovieRating={setusermovieRating} />
    </>
  );
};

function MovieRating({ usermovieRating, setusermovieRating }) {
  return (
    <>
      <div>
        <StarRating maxRating={10} setusermovieRating={setusermovieRating} usermovieRating={usermovieRating}/>
        <p
          style={{
            color: "red",
            fontWeight: "bolder",
          }}
        >
          This movie was rated {usermovieRating} starts
        </p>
      </div>
    </>
  );
}

export default ShowStarRatingApp;
