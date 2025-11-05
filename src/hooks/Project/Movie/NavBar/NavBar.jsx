import Logo from "./Logo";
import NumResults from "./NumResults";
import Search from "./Search";
import "../Movie.css";
import { Children } from "react";

export default function NavBar({ query, setQuery, children }) {
  // console.log(props);

  return (
    <nav className="nav-bar">
      <Logo />
      <Search query={query} setQuery={setQuery} />
      {/* <NumResults movies={movies} /> */}
      {children}
      {/* here at the position of childern we ca pass any component to navbar we jst have to mention component where nav bar is called  */}
    </nav>
  );
}
