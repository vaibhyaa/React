/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
import styles from "./CountryItem.module.css";

function CountryItem({ country }) {
  return (
    <li className={styles.countryItem}>
      <span>🚩</span>
      <span>{country.country}</span>
    </li>
  );
}

export default CountryItem;
