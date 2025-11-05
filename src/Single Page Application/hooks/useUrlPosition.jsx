import React from "react";
import { useSearchParams } from "react-router-dom";


// lets you read and write the query parameters (the part of the URL after the ?) in your React app.
const useUrlPosition = () => {
  // When you click on the map
  // this changes the URL (adds ?lat=...&lng=...)
  // this extracts those lat/lng values from the URL and uses them
  const [searchParams] = useSearchParams();
  const Lat = Number(searchParams.get("lat") || "0");
  const Lng = Number(searchParams.get("lng") || "0");

  return [Lat, Lng];
};

export default useUrlPosition;



// | Code                                                        | Meaning                                                              |
// | ----------------------------------------------------------- | -------------------------------------------------------------------- |
// | `const [searchParams, setSearchParams] = useSearchParams()` | Declares two things: the current query params and a setter function. |
// | `searchParams.get("lat")`                                   | Reads a query parameter value from the URL.                          |
// | `setSearchParams({ lat: 40, lng: -74 })`                    | Updates the URL query params **without reloading** the page.         |
