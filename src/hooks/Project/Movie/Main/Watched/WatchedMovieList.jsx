import React from "react";
import WatchedMovie from "./WatchedMovie";
import "../../Movie.css";

const WatchedMovieList = ({ watched, setWatched, selectedId }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie
          movie={movie}
          key={movie.imdbID}
          setWatched={setWatched}
          selectedId={selectedId}
        />
      ))}
    </ul>
  );
};

export default WatchedMovieList;
