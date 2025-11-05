import React from "react";
import "../../Movie.css";

const WatchedMovie = ({ movie, setWatched, selectedId }) => {
  return (
    <>
      <li key={movie.imdbID}>
        <img src={movie.Poster} alt={`${movie.Title} poster`} />
        <h3>{movie.Title}</h3>
        <div
        // style={{
        //   display: "flex",
        //   justifyContent: "center",
        //   alignItems: "center",
        //   flexWrap: "nowrap",
        // }}
        >
          <p>
            <span>⭐️</span>
            <span>{movie.imdbRating.toFixed(2)}</span>
          </p>
          <p>
            <span>🌟</span>?{" "}
            {/* <span>{movie.userRating ? movie.userRating : 10}</span> */}
            <span>{movie.userRating.toFixed(2)}</span>
          </p>
          <p>
            <span>⏳</span>
            <span>{movie.Runtime} min</span>
          </p>
        </div>
        <button
          style={{
            display: "flex",
            flexDirection: "column", // 👈 makes children stack vertically
            // alignItems: "center",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px",
            border: "1px solid #ddd",
            borderRadius: "12px",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            background: "#e99696ff",
            margin: "8px 0",
            maxWidth: "280px",
          }}
          onClick={() => {
            setWatched((eachWatchedMovie) =>
              eachWatchedMovie.filter(
                (selectedMovie) => selectedMovie.imdbID !== movie.imdbID
              )
            );
          }}
        >
          Delete
        </button>
      </li>
    </>
  );
};

export default WatchedMovie;
