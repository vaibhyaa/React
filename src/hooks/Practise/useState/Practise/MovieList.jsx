import React, { useState } from "react";

const MovieList = () => {
  const [movies, setmovies] = useState([
    { id: 1, name: "Movie-1", Rating: 5 },
    { id: 2, name: "Movie-2", Rating: 4 },
    { id: 3, name: "Movie-3", Rating: 3 },
  ]);
  return (
    <>
      <ul>
        {movies.map((eachmovie) => (
          <li key={eachmovie.id}>
            <p>{eachmovie.name}</p>
            <p>{eachmovie.Rating}</p>
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() =>
            setmovies((currentMOvies) => [
              ...currentMOvies,
              { id: 4, name: "Movie-4", Rating: 6 },
            ])
          }
        >
          ADD MOVIE
        </button>
        <button
          onClick={() =>
            setmovies((currentMOvies) =>
              currentMOvies.filter((eachMOvie) => eachMOvie.id !== 2)
            )
          }
        >
          Remove MOVIE
        </button>
        <button
          onClick={() =>
            setmovies((currentMovies) =>
              currentMovies.map((movie) =>
                movie.id === 3 ? { ...movie, name: "MOVIE-THIRD" } : movie
              )
            )
          }
        >
          Update MOVIE
        </button>
      </div>
    </>
  );
};

export default MovieList;
