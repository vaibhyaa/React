/* eslint-disable react/prop-types */
import React, { useContext } from "react";
import style from "./CityList.module.css";
import Spinner from "./Spinner";
import CityItem from "./CityItem";
import Message from "./Message";
import { CitiesContext } from "../Context/CitiesContext";

// Yes, this component’s main job is to display a list of all cities
// It does that by mapping over the cities array (from context or props) and rendering one <CityItem /> per city

const CityList = () => {
  // const { cities, loading } = useCities();
  const { cities, loading } = useContext(CitiesContext);

  if (loading) {
    return <Spinner />;
  }

  if (!cities.length) {
    return <Message message="add cities...!" />;
  }
  return (
    <ul className={style.cityList}>
      {cities.map((city) => (
        <CityItem city={city} key={city.id} />
      ))}
    </ul>
  );
};

export default CityList;

// | Responsibility               | Description                                       |
// | ---------------------------- | ------------------------------------------------- |
// | ✅ Data source                | Takes `cities` and `loading` from context         |
// | ✅ Conditional rendering      | Shows spinner / message / list depending on state |
// | ✅ Mapping                    | Loops through cities and renders `<CityItem />`   |
// | 🚫 No logic for city details | That’s handled in `<City />` component            |
