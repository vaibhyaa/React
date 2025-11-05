import React from "react";
import "../../Movie.css";

const Movie = ({ movie, setSelectedId }) => {
  //   Movie component is just a presentational component → it only knows about the props you give it (Title, Poster, Year).
  // MovieDetails component is the data-fetching + detail view → it’s the one that actually has the full data, so the document.title effect really belongs here, not in Movie.

  // Why Movie shouldn’t set the title
  // If you set the tab title in Movie, you’ll end up updating the title every time the list re-renders, even when you’re just showing 10 movies in a list (not selected).
  // That doesn’t reflect the real state — you only want to update the tab title when the user is viewing details of one movie.

  return (
    <li
      key={movie.imdbID}
      onClick={() => {
        setSelectedId((previousSelectedId) =>
          // console.log(previousSelectedId),
          movie.imdbID === previousSelectedId ? null : movie.imdbID
        );
      }}
    >
      {/* <img src={?movie.Poster } alt={`${movie.Title} poster`} /> */}
      {/* <img
        src={
          movie.Poster && movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/https://imgs.search.brave.com/7rMozbruhl8ZuJBntufjtdn6anTQHiqp5nfgLtTl7Uk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90aHVt/YnMuZHJlYW1zdGlt/ZS5jb20vYi9ibGFu/ay1maWxtLWNsYXBw/ZXItYm9hcmQtbW92/aWUtY2xhcHBlci1j/aW5lbWEtYm9hcmQt/c2xhdGUtZmlsbS1y/ZWQtYmFja2dyb3Vu/ZC1jaW5lbWEtY29u/Y2VwdC1jbGlwcGlu/Zy1wYXRoLWluY2x1/ZGVkLWJsYW5rLTE0/NjE4NzU5MC5qcGc?text=No+Image"
        }
        alt={`${movie.Title} poster`}
      /> */}
      {/* <img
        src={
          movie.Poster && movie.Poster !== "N/A"
            ? movie.Poster
            : "https://via.placeholder.com/150x220?text=No+Image"
        }
        alt={`${movie.Title} poster`}
      /> */}
      <img
        src={
          movie.Poster && movie.Poster.startsWith("http")
            ? movie.Poster
            : "https://placehold.co/150x220?text=No+Image"
        }
        alt={`${movie.Title} poster`}
      />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
