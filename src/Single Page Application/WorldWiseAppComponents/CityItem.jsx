/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import styles from "./CityItem.module.css";
import { Link } from "react-router-dom";
import { CitiesContext } from "../Context/CitiesContext";

// CityItem is a single list item component that:
// Displays one city (name, emoji, date),
// Highlights it if it’s the currently selected city,
// Links to that city’s details page using react-router-dom

const CityItem = ({ city }) => {
  const { currentCity ,deleteCity } = useContext(CitiesContext);
  const { cityName, date, id: cityid, position } = city;

  const formatDate = (date) =>
    new Intl.DateTimeFormat("en", {
      day: "numeric",
      month: "long",
      year: "numeric",
      // weekday: "long",
    }).format(new Date(date));

  return (
    // 	Both are correct, but:
    // Use relative path (to={${id}}) if the link is always rendered inside /app/cities. It’s shorter and cleaner.
    // Use absolute path (to={/app/cities/${id}}) if you want the link to work no matter where the component is rendered.
    <li>
      {/* <Link className={styles.cityItem} to={`${cityid}?`}> */}
      <Link
        className={`${styles.cityItem} ${
          cityid === currentCity.id ? styles["cityItem--active"] : ""
        }`}
        to={`${cityid}?lat=${position.lat}&lng=${position.lng}`}
      >
        {/* <Link className={styles.cityItem} to={`cities/${id}`}> */}
        <span className={styles.emoji}>🚩</span>
        <h3 className={styles.name}>{cityName}</h3>
        <time className={styles.date}>{formatDate(date)}</time>
        <button
          className={styles.deleteBtn}
          onClick={(e) => {
            e.preventDefault();
            // console.log("deleting");
            deleteCity(cityid);
          }}
        >
          ❌
        </button>
      </Link>
    </li>
  );
};

export default CityItem;

//flow:-
// The Flow (Link → Route → Component)
// User clicks on a city link (/app/cities/123).
// React Router sees this matches the route cities/:id.
// It renders <City cities={cities} />.
// Inside <City>, you use useParams() to grab the id.
// You then lookup that city from the cities state (fetched earlier).
// The UI updates and shows the city details

// What happens when a user clicks <Link> or <NavLink> in React Router?
// User clicks a link
// Example:
// <NavLink to="/profile" />
// This updates the browser’s URL from / → /profile.
// No full page reload
// React Router intercepts the click.
// It prevents the browser’s default behavior (reloading the whole app).
// React Router matches the URL
// It looks through all your defined <Route path="..." />.
// Finds the one that matches (path="/profile").
// Renders the element
// Whatever you defined in element={...} gets rendered.
// Example:
// <Route path="/profile" element={<ProfilePage />} />
// → React Router will mount <ProfilePage />.
// 🧠 So in short:
// to (in Link/NavLink) → updates the URL.
// React Router → listens for URL changes.
// Route → matches that URL and renders the component in its element prop.
// ⚡ That’s why we say React Router makes the UI “synchronize with the URL”.
// Your URL becomes the single source of truth for what should be visible on screen

// Exactly! That’s the whole cycle in React Router:
// <Link> / <NavLink> → Updates the URL when clicked (without reloading the page).
// React Router → Watches the URL change.
// <Route> → Matches the new URL with its path.
// element={...} → Renders the correct component into the UI.

// So yeah, you can think of it like:
// 👉 Link/NavLink = “URL changer”
// 👉 Route = “URL matcher + component renderer”

// ⚡ One extra note:
// Use <Link> when you just want navigation.
// Use <NavLink> when you also want to apply styles for the active route (like highlighting the current tab)

// | Purpose                     | Description                                                  |
// | --------------------------- | ------------------------------------------------------------ |
// | 🎯 **Render one city item** | Displays emoji, name, and date                               |
// | 🔗 **Navigation**           | Uses `<Link>` to navigate to `/app/cities/:id`               |
// | 🗺️ **Query params**        | Adds `lat` and `lng` to the URL                              |
// | ✨ **Highlight active**      | Adds a different CSS class if the city is currently selected |
// | 🧹 **Delete button**        | Placeholder for future functionality                         |
