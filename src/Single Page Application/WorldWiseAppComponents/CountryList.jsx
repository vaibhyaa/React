/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import Spinner from "./Spinner";
import Message from "./Message";
import style from "./CountryList.module.css";
import CountryItem from "./CountryItem";
// import { CitiesContext,} from "../Context/CitiesContext";
import { CitiesContext } from "../Context/CitiesContext_useReducer";

const CountryList = () => {
  // const { cities, loading } = useCities;
  const { cities, loading } = useContext(CitiesContext);

  if (loading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return <Message message="add country...!" />;
  }

  const countries = cities.reduce((acc, city) => {
    // check if this country already exists in acc
    if (!acc.some((el) => el.country === city.country)) {
      acc.push({ country: city.country, emoji: city.emoji });
    }
    return acc;
  }, []);

  return (
    <ul className={style.countryList}>
      {countries.map((country) => {
        return <CountryItem country={country} key={country.country} />;
      })}
    </ul>
    // <ul className={style.countryList}>
    //   {countries.map((country) => (
    //     <CountryItem country={country} key={country.id} />
    //   ))}
    // </ul>
  );
};

export default CountryList;
