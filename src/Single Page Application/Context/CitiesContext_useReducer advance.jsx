/* eslint-disable react/prop-types */
import React, { createContext, useContext, useEffect, useReducer } from "react";

// 1️⃣ Create Context
const CitiesContext = createContext();

// 2️⃣ Define Initial State
const initialState = {
  cities: [],
  currentCity: {},
  loading: false,
  error: "",
};

// 3️⃣ Define Action Types — prevents typos
const ACTIONS = {
  LOADING: "loading",
  CITIES_LOADED: "cities/loaded",
  CITY_LOADED: "city/loaded",
  CITY_CREATED: "cities/created",
  CITY_DELETED: "cities/deleted",
  ERROR: "rejected",
};

// 4️⃣ Reducer — must be pure, predictable, and switch by type
function citiesReducer(state, action) {
  switch (action.type) {
    case ACTIONS.LOADING:
      return { ...state, loading: true, error: "" };

    case ACTIONS.CITIES_LOADED:
      return { ...state, loading: false, cities: action.payload };

    case ACTIONS.CITY_LOADED:
      return { ...state, loading: false, currentCity: action.payload };

    case ACTIONS.CITY_CREATED:
      return {
        ...state,
        loading: false,
        cities: [...state.cities, action.payload],
      };

    case ACTIONS.CITY_DELETED:
      return {
        ...state,
        loading: false,
        cities: state.cities.filter((city) => city.id !== action.payload),
      };

    case ACTIONS.ERROR:
      console.error("❌ CitiesContext Error:", action.payload);
      return { ...state, loading: false, error: action.payload };

    default:
      console.warn(`⚠️ Unknown action type: ${action.type}`);
      return state;
  }
}

// 5️⃣ Context Provider
export function CitiesProvider({ children }) {
  const [{ cities, currentCity, loading, error }, dispatch] = useReducer(
    citiesReducer,
    initialState
  );

  // Fetch all cities on mount
  useEffect(() => {
    (async function fetchCities() {
      dispatch({ type: ACTIONS.LOADING });
      try {
        const res = await fetch("http://localhost:8000/cities");
        if (!res.ok) throw new Error("Failed to fetch cities");
        const data = await res.json();
        dispatch({ type: ACTIONS.CITIES_LOADED, payload: data });
      } catch (err) {
        dispatch({
          type: ACTIONS.ERROR,
          payload: err.message || "Error loading cities",
        });
      }
    })();
  }, []);

  // Fetch a single city
  async function getCity(id) {
    dispatch({ type: ACTIONS.LOADING });
    try {
      const res = await fetch(`http://localhost:8000/cities/${id}`);
      if (!res.ok) throw new Error("Failed to load city");
      const data = await res.json();
      dispatch({ type: ACTIONS.CITY_LOADED, payload: data });
    } catch (err) {
      dispatch({ type: ACTIONS.ERROR, payload: err.message });
    }
  }

  // Create a new city
  async function createCity(newCity) {
    dispatch({ type: ACTIONS.LOADING });
    try {
      const res = await fetch("http://localhost:8000/cities", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newCity),
      });
      if (!res.ok) throw new Error("Failed to create city");
      const data = await res.json();
      dispatch({ type: ACTIONS.CITY_CREATED, payload: data });
    } catch (err) {
      dispatch({ type: ACTIONS.ERROR, payload: err.message });
    }
  }

  // Delete a city
  async function deleteCity(cityId) {
    dispatch({ type: ACTIONS.LOADING });
    try {
      const res = await fetch(`http://localhost:8000/cities/${cityId}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete city");
      dispatch({ type: ACTIONS.CITY_DELETED, payload: cityId });
    } catch (err) {
      dispatch({ type: ACTIONS.ERROR, payload: err.message });
    }
  }

  // 6️⃣ Provide State + Actions
  const value = {
    cities,
    currentCity,
    loading,
    error,
    getCity,
    createCity,
    deleteCity,
  };

  return (
    <CitiesContext.Provider value={value}>{children}</CitiesContext.Provider>
  );
}

// 7️⃣ Custom Hook for Cleaner Consumption
export function useCities() {
  const context = useContext(CitiesContext);
  if (!context)
    throw new Error("useCities must be used within a CitiesProvider");
  return context;
}
