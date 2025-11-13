/* eslint-disable react/react-in-jsx-scope */
// "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=0&longitude=0"

import { useContext, useEffect, useState } from "react";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import styles from "./Form.module.css";
import Button from "./Button";
import BackButton from "./BackButton";
import useUrlPosition from "../hooks/useUrlPosition";
import Message from "./Message";
import Spinner from "./Spinner";
// import { CitiesContext } from "../Context/CitiesContext";
import { CitiesContext } from "../Context/CitiesContext_useReducer";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

// export function convertToEmoji(countryCode) {
//   const codePoints = countryCode
//     .toUpperCase()
//     .split("")
//     .map((char) => 127397 + char.charCodeAt());
//   return String.fromCodePoint(...codePoints);
// }

function Form() {
  const { createCity, loading } = useContext(CitiesContext);
  const [latPosition, lngPosition] = useUrlPosition();
  // console.log(latPosition, lngPosition);
  // const navigate = useNavigate();
  const [cityName, setCityName] = useState("");
  const [country, setCountry] = useState("");
  const [date, setDate] = useState(new Date());
  const [notes, setNotes] = useState("");
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!latPosition && !lngPosition) {
      return;
    }
    async function fetchCity() {
      try {
        setisLoading(true);
        seterror("");
        const res = await fetch(
          `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latPosition}&longitude=${lngPosition}&localityLanguage=en`
        );
        const data = await res.json();
        // console.log(data);
        if (!data.countryCode) {
          throw new Error("not a country ..!");
        }
        setCityName(data.city || data.locality || "");
        setCountry(data.countryName);
        // setemoji(convertToEmoji(data.continentCode));
      } catch (error) {
        // console.log(error, "erro in fetching data");
        seterror(error.message);
      } finally {
        setisLoading(false);
      }
    }
    fetchCity();
  }, [latPosition, lngPosition]);

  {
    if (isLoading) {
      return <Spinner />;
    }

    if (!latPosition && !lngPosition) {
      return <Message message="start by clicking somewhere on the map " />;
    }

    if (error) {
      return <Message message={error} />;
    }
  }

  return (
    <form
      className={`${styles.form} ${loading ? styles.loading : ""}`}
      onSubmit={async (e) => {
        e.preventDefault();
        if (!cityName && !date) {
          return;
        }
        const newCity = {
          cityName,
          country,
          date,
          notes,
          position: {
            lat: latPosition,
            lng: lngPosition,
          },
        };
        // console.log(newCity);
        await createCity(newCity);
        navigate("/app/cities");
        // navigate(`/app/cities?lat=${latPosition}&lng=${lngPosition}`);
      }}
    >
      <div className={styles.row}>
        <label htmlFor="cityName">City name</label>
        <input
          id="cityName"
          onChange={(e) => setCityName(e.target.value)}
          value={cityName}
        />
        {/* <span className={styles.flag}>{emoji}</span> */}
      </div>

      {/* <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <input
          id="date"
          onChange={(e) => setDate(e.target.value)}
          value={date}
        />
      </div> */}
      <div className={styles.row}>
        <label htmlFor="date">When did you go to {cityName}?</label>
        <DatePicker
          id="date"
          className={styles.input}
          selected={date}
          onChange={(date) => setDate(date)}
          dateFormat="dd/MM/yyyy"
        />
      </div>

      <div className={styles.row}>
        <label htmlFor="notes">Notes about your trip to {cityName}</label>
        <textarea
          id="notes"
          onChange={(e) => setNotes(e.target.value)}
          value={notes}
        />
      </div>

      <div className={styles.buttons}>
        <Button type="primary">Add</Button>
        <BackButton />
        {/* <Button
          onClick={(e) => {
            // prevent from submitting the form and reload the page
            e.preventDefault();
            navigate(-1);
          }}
          type="back"
        >
          &larr; Back
        </Button> */}

        {/*
        You can also avoid preventDefault() by explicitly setting the button type
         <button type="button" onClick={() => navigate(-1)}>
          Cancel
        </button> */}
      </div>
    </form>
  );
}

export default Form;

// How navigate(-1) works
// useNavigate is tied to the browser’s History API.
// The number you pass (-1, 1, etc.) means “move in the browser history stack”.

// So:
// navigate(-1) = go back one step (like clicking the browser Back button).
// navigate(-2) = go back two steps.
// navigate(1) = go forward one step (like clicking browser Forward).

// 🔹 Example: History stack
// Imagine you visited routes in this order:
// /home
// /products
// /form

// ➡️ Your browser history stack looks like:
// [ /home ] -> [ /products ] -> [ /form ]
//                                 ↑ (current)

// Now:
// navigate(-1) → goes back to /products
// navigate(-2) → goes back to /home
// navigate(1) → forward (only works if you already went back)
