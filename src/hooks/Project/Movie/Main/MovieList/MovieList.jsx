import React, { useState } from "react";
import Movie from "./Movie";
import "../../Movie.css";

const MovieList = ({ movies ,setSelectedId}) => {
  return (
    <ul className="list">
      {movies?.map((movie) => (
        <Movie movie={movie} key={movie.imdbID} setSelectedId={setSelectedId}/>
      ))}
    </ul>
  );
};

export default MovieList;
