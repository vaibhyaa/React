import React, { useEffect, useState } from "react";
import style from "./MovieDetails.module.css";
import ShowStarRatingApp from "../../StarRating/ShowStarRatingApp";
import Loader from "../../Comp/Loader";
import { FaLeaf } from "react-icons/fa";

const MovieDetails = ({ selectedId, setSelectedId, setWatched, watched }) => {
  const [selectedMovie, setselectedMovie] = useState({}); //this object is state variable to store the seleted movie data if we click on one movie that movie detaisl will get store in this object
  const [isLOading, setisLOading] = useState(false);
  // same loading state here also while getting the response

  const [usermovieRating, setusermovieRating] = useState("");
  // const [buttonText, setButtonText] = useState("Add to list...!");

  const isWatched = watched.some(
    (eachMovie) => eachMovie.imdbID === selectedId
  );
  // console.log(isWatched);

  const watchedUserRating = watched.find(
    (eachmovie) => eachmovie.imdbID === selectedId
  );
  // console.log(watchedUserRating?.userRating);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      setisLOading(true);
      setusermovieRating("");
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?apikey=6c3f5b64&i=${selectedId}`
        );
        const data = await res.json();
        // console.log(data); // you’ll see full details of the selected movie
        setselectedMovie(data);
        setisLOading(false);
      } catch (error) {
        console.error("Failed to fetch movie details:", error);
      }
    };

    if (selectedId) {
      fetchMovieDetails();
    }

    // return () => {
    //   second
    // }
  }, [selectedId]);

  //this present in movie details and not in movie component because then we as user click on one movie it should pass that movie data only and shows the title
  // in movie component the

  // useEffect(() => {
  //   if (!selectedMovie.Title) {
  //     return;
  //   }
  //   document.title = `Movie | ${selectedMovie.Title}`;
  //   // this cleanup function runs after the component is already unmounted
  //   // here the most important concept of javascript is used and that is closure
  //   //the clean function runs only after the component has already unmounted . sp it does rememver the title by closures

  //   return () => {
  //     document.title = `Movie App`;
  //   };
  // }, [selectedMovie.Title]);

  //   sees list (Movie) → no title change, stays "Movie App".
  // User clicks a movie → selectedId updates → MovieDetails mounts → fetch runs → state fills → effect runs → title becomes "Movie | Inception".
  // User closes details / goes back → MovieDetails unmounts → cleanup runs → title resets back to "Movie App".

  useEffect(() => {
    localStorage.setItem("watched", JSON.stringify(watched));
  }, [watched]);

  return (
    <div className={style.detailscard}>
      {isLOading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button
              style={{
                color: "red",
                backgroundColor: "lightblue",
                margin: "3px",
              }}
              className={style.buttonback}
              onClick={() => setSelectedId(false)}
            >
              &larr;
            </button>
            <img
              src={selectedMovie.Poster}
              alt={`Poster of ${selectedMovie}`}
            />
            <div>
              <h2>{selectedMovie.Title}</h2>
              <p>
                {selectedMovie.Released} • {selectedMovie.Runtime}
              </p>
              <p>{selectedMovie.Genre}</p>
              <p>
                <span>⭐</span> {selectedMovie.imdbRating} IMDb Rating
              </p>
            </div>
          </header>

          <section>
            <div
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
                background: "#fff",
                margin: "8px 0",
                maxWidth: "280px",
              }}
            >
              {isWatched ? (
                <>
                  <p>you rated with movie {watchedUserRating?.userRating}</p>
                </> // show nothing if already watched
              ) : (
                <>
                  <ShowStarRatingApp
                    usermovieRating={usermovieRating}
                    setusermovieRating={setusermovieRating}
                  />
                  {usermovieRating > 0 && (
                    <button
                      style={{
                        backgroundColor: "#ff6b6b",
                        color: "#fff",
                        border: "none",
                        padding: "10px 16px",
                        borderRadius: "8px",
                        cursor: "pointer",
                        fontSize: "14px",
                        fontWeight: "bold",
                        transition: "all 0.3s ease",
                      }}
                      // value={buttonText}
                      onClick={() => {
                        const newWatechedMovie = {
                          imdbID: selectedId,
                          imdbRating: Number(selectedMovie.imdbRating),
                          Title: selectedMovie.Title,
                          Year: selectedMovie.Year,
                          Poster: selectedMovie.Poster,
                          userRating: usermovieRating,
                          Runtime: Number(
                            selectedMovie.Runtime.split(" ").at(0)
                          ), // just minutes
                        };

                        setWatched((alreadyWatchedMovies) => [
                          ...alreadyWatchedMovies,
                          newWatechedMovie,
                        ]);

                        setSelectedId(false);
                      }}
                    >
                      Add To List...!
                    </button>
                  )}
                </>
              )}
            </div>

            <p>
              <em>
                <i>{selectedMovie.Plot}</i>
              </em>
            </p>
            <p>
              <b>{selectedMovie.Actors}</b>
            </p>
            <p>
              <b>Directed By {selectedMovie.Director}</b>
            </p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetails;

// important notes :-
// useEffect(() => { ... }, [selectedMovie.Title]);
// React will run this effect every time selectedMovie.Title changes.
// So:
// When the movie details are fetched and the Title updates → this runs.
// If the user selects another movie → new Title, effect runs again.
// If Title stays the same → React skips it.

// 2. if (!selectedMovie.Title) { return; }
// Guard clause: if no title yet (e.g., before fetch finishes) → exit early and don’t touch the tab title.
// Prevents setting the tab to "Movie | undefined". ✅

// 3. document.title = \Movie | ${selectedMovie.Title}`;`
// Sets the browser tab’s title to include the current movie’s title.
// Example: if selectedMovie.Title = "Inception" → tab shows Movie | Inception.

// 4. return () => { document.title = \Movie | ${selectedMovie.Title}`; };`
// This is the cleanup function.

// It runs when:
// The component unmounts (e.g., user closes movie details).
// Or before running the effect again (e.g., switching from "Inception" to "Interstellar").
// 👉 But right now, your cleanup is doing the same thing as the main effect.
// That means when you leave the page, the title still says "Movie | <last movie>
