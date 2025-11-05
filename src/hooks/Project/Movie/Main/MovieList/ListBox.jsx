import React from "react";
import { useState } from "react";
import "../../Movie.css";
import MovieList from "./MovieList";

// const ListBox = ({ children }) => {
const ListBox = ({ movies ,setSelectedId}) => {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <MovieList movies={movies} setSelectedId={setSelectedId}/>}
    </div>
  );
};

export default ListBox;
