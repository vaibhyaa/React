import React, { useState } from "react";
import StarRating from "./StarRating";

function MovieRating() {
  const [movieRating, setmovieRating] = useState(0);
  return (
    <>
      <div>
        <StarRating maxRating={10} onSetMovieRating={setmovieRating} />
        <p>This movie was rated {movieRating} starts</p>
      </div>
    </>
  );
}

const ShowStarRatingApp = () => {
  return (
    <>
      {/* <StarRating
        maxRating={5}
        mesages={["Terrible", "bad", "Okay", "Good", "Amazing"]}
      /> */}

      <MovieRating />
    </>
  );
};

export default ShowStarRatingApp;
