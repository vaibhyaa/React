import { useState } from "react";
import NavBar from "./NavBar/NavBar";
import ListBox from "./Main/MovieList/ListBox";
import WatchedBox from "./Main/Watched/WatchedBox";
import MovieList from "./Main/MovieList/MovieList";
import NumResults from "./NavBar/NumResults";
import { useEffect } from "react";
import { CgEnter } from "react-icons/cg";
import Loader from "./Comp/Loader";
import ErrorMessage from "./Comp/ErrorMessage";
import WatchedSummery from "./Main/Watched/WatchedSummery";
import WatchedMovieList from "./Main/Watched/WatchedMovieList";
import Box from "./Comp/Box";
import MovieDetails from "./Main/MovieList/MovieDetails";
import { FaLeaf } from "react-icons/fa";

// const tempMovieData = [
//   {
//     imdbID: "tt1375666",
//     Title: "Inception",
//     Year: "2010",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt0133093",
//     Title: "The Matrix",
//     Year: "1999",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
//   },
//   {
//     imdbID: "tt6751668",
//     Title: "Parasite",
//     Year: "2019",
//     Poster:
//       "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
//   },
// ];

// const KEY = "titanic";

export default function MovieApp() {
  const [movies, setMovies] = useState([]); //this state is for serring movie list to the array to display list
  // const [watched, setWatched] = useState([]); //this state array is for adding movies which i watched
  const [error, seterror] = useState(""); //this state is for displayig error/errorcomponent if we got errror
  const [query, setQuery] = useState(""); //this is to search specific movie in search tab
  const [isLoading, setisLoading] = useState(false); //this loading state is for when we are fetching data sometimes it is slow for that moment we have to show loading text
  const [selectedId, setSelectedId] = useState(null); //selectedId’s role is purely UI state control, to show movie details or watched summery

  const [watched, setWatched] = useState(() => {
    const storedValue = localStorage.getItem("watched");
    return storedValue ? JSON.parse(storedValue) : [];
  });

  //this state array is for adding movies which i watched

  // useEffect(() => {
  //   fetch("http://www.omdbapi.com/?i=tt3896198&apikey=6c3f5b64&s=interstellar")
  //     .then((response) => response.json())
  //     .then((data) => setMovies(data.Search));
  //   // return () => {
  //   //   console.log("Cleanup before unmount");
  //   // };
  // }, []);

  // async await
  useEffect(() => {
    async function fetchMovies(searchedQuery) {
      // so of not seacrhing anything as default searchedQuery==randomQuery
      // and if we are seacrhing somethign by typing (state changes) then searchedQuery==query
      try {
        setisLoading(true); //this tells that before loading the data from api takes time to load so for that moment show loading
        seterror(""); //always set the error back to default before feting any data start

        const res = await fetch(
          `https://www.omdbapi.com/?i=tt3896198&apikey=6c3f5b64&s=${searchedQuery}`
        );

        if (!res.ok) {
          throw new Error("Something went wrong with fetching movies");
        }

        const data = await res.json(); // await needed here too

        if (data.Response === "False") {
          // console.log(data);
          throw new Error("Movie not found ");
        }
        setMovies(data.Search); //once we got the data setthat to current state to display

        // console.log(movies);  stale state
        // console.log(data.Search);
      } catch (error) {
        // console.error(error.message);
        seterror(error.message);
      } finally {
        setisLoading(false); //after we got data  we can show that and loading state is false / disable
        // console.log(data);
      }
    }
    // Show nothing if no search term yet
    // if (!query) {
    //   setMovies([]);
    //   setisLoading(false);
    //   seterror("");
    //   return;
    // }

    if (!query) {
      // Random default search
      const defaults = [
        "batman",
        "spiderman",
        "matrix",
        "avatar",
        "mission impossible",
      ];
      const randomQuery = defaults[Math.floor(Math.random() * defaults.length)];
      fetchMovies(randomQuery);
      return;
    }

    // Show "type more" if less than 2 characters
    if (query.length < 3) {
      setMovies([]);
      setisLoading(false);
      seterror("Type at least 3 characters to search.");
      return;
    }
    fetchMovies(query); // Call the asyn function so that the api request function will run
  }, [query]);

  useEffect(() => {
    document.addEventListener("keydown", (e) => {
      if (e.code === "Escape") {
        setSelectedId(false);
        console.log("closing");
      }
    });
    // return () => {
    //   second
    // }
  }, []);

  return (
    <>
      {/* component composition */}
      <NavBar query={query} setQuery={setQuery}>
        <NumResults movies={movies} />
      </NavBar>
      <main className="main">
        {/* <ListBox movies={movies} /> */}

        {/* 1st method */}
        {/* <ListBox>
          {isLoading ? (
            <centre>
              <h1>loading</h1>
            </centre>
          ) : (
            <MovieList movies={movies} />
          )}
        </ListBox> */}

        {/* 2nd method */}
        {/* {isLoading ? <Loader /> : <ListBox movies={movies} />} */}

        {isLoading && <Loader />}
        {!isLoading && !error && (
          <ListBox movies={movies} setSelectedId={setSelectedId} />
        )}
        {error && <ErrorMessage message={error} />}

        {/* <>
        <WatchedSummery watched={watched}/>
        <WatchedMovieList watched={watched}/>
        </> */}

        <Box>
          {selectedId ? (
            <MovieDetails
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              setWatched={setWatched}
              watched={watched}
            />
          ) : (
            // <MovieDetails
            //   selectedId={selectedId}
            //   setSelectedId={setSelectedId}
            // />
            <>
              <WatchedSummery
                watched={watched}
                setWatched={setWatched}
                selectedId={selectedId}
              />
              <WatchedMovieList
                watched={watched}
                setWatched={setWatched}
                selectedId={selectedId}
              />
            </>
          )}
        </Box>
      </main>
    </>
  );
}
