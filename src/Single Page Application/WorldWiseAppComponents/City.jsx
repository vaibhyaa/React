/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import { useParams } from "react-router-dom";
import styles from "./City.module.css";
import { useContext } from "react";
import { CitiesContext } from "../Context/CitiesContext";
import { useEffect } from "react";
import Spinner from "./Spinner";
import BackButton from "./BackButton";

// TEMP DATA
// const currentCity = {
//   cityName: "Lisbon",
//   emoji: "🇵🇹",
//   date: "2027-10-31T15:59:59.138Z",
//   notes: "My favorite city so far!",
// };

const formatDate = (date) =>
  new Intl.DateTimeFormat("en", {
    day: "numeric",
    month: "long",
    year: "numeric",
    weekday: "long",
  }).format(new Date(date));

function City() {
  const { getCity, currentCity, loading } = useContext(CitiesContext);
  // const idOfSelectedCity = useParams();
  // React Router gives you { cityid: 6548758 } from the URL
  const { cityid } = useParams();
  // console.log(cityid);

  useEffect(() => {
    getCity(cityid);
  }, [cityid]);
  // That means every time the cityid changes (like clicking another city), the getCity() function is triggered again

  // this are the values of the selected city whch we want to show in card (one city card)
  const { cityName, date, notes } = currentCity;

  if (loading) {
    <Spinner />;
  }

  return (
    <div className={styles.city}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.titleGroup}>
          <h1 className={styles.label}>{cityName}</h1>
          {/* <h1 className={styles.cityId}>{cityid}</h1> */}
          <h2 className={styles.cityName}>
            <span className={styles.emoji}>🚩</span> {cityName}
          </h2>
        </div>
      </div>

      {/* Travel Date */}
      <div className={styles.section}>
        <h6 className={styles.label}>You visited {cityName} on</h6>
        <p className={styles.value}>{formatDate(date || null)}</p>
      </div>

      {/* Notes */}
      {notes && (
        <div className={styles.section}>
          <h6 className={styles.label}>Your Notes</h6>
          <p className={styles.value}>{notes}</p>
        </div>
      )}

      {/* Learn More */}
      <div className={styles.section}>
        <h6 className={styles.label}>Learn More</h6>
        <a
          href={`https://en.wikipedia.org/wiki/${cityName}`}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          Explore {cityName} on Wikipedia →
        </a>
      </div>

      {/* Optional Button */}
      {/* <div className={styles.footer}> */}
      <div>
        {" "}
        <BackButton />
      </div>
    </div>
  );
}

export default City;
