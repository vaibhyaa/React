import React, { useEffect, useState } from "react";

const url =
  "http://www.omdbapi.com/?i=tt3896198&apikey=6c3f5b64&s=interstellar";

const Picture = () => {
  const [Picture, setPicture] = useState([]);
  const [name, setname] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setPicture(data.Search);
        // console.log(data.Search);
      })
      .catch((err) => console.error("Error fetching data:", err));
    // return () => {
    //   second;
    // };
  }, []);

  function handleSearch() {
    if (!name) return;

    fetch(`http://www.omdbapi.com/?apikey=6c3f5b64&s=${name}`)
      .then((res) => res.json())
      .then((data) => {
        setPicture(data.Search || []); // handle invalid queries
        // console.log("Search Results:", data.Search);
      })
      .catch((err) => console.error("Search error:", err));
  }

  return (
    <>
      <div>
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setname(e.target.value)}
          />
          <div>
            <button onClick={handleSearch}>Serach</button>
          </div>
        </div>
        <ul>
          {Picture.map((eachPicture) => (
            <li key={eachPicture.imdbID}>{eachPicture.Title}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Picture;
