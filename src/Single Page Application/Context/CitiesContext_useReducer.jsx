/* eslint-disable react/prop-types */
import React, {
  createContext,
  useCallback,
  // useContext,
  useEffect,
  useReducer,
  // useState,
} from "react";

export const CitiesContext = createContext();

// const [state, dispatch] = useReducer(reducer, initialState);
// number exampe
// const [count, dispatch] = useReducer(reducer, 0);
//array example
// const [items, dispatch] = useReducer(reducer, []);

const initialState = {
  cities: [],
  currentCity: {},
  loading: false,
  error: "",
};

const CitiesProvider = ({ children }) => {
  // initialState is always an object
  // in most real-world use cases, especially when managing multiple related values, we use an object as the state
  const [{ cities, currentCity, loading }, dispatch] = useReducer(
    (state, action) => {
      switch (action.type) {
        case "loading":
          return {
            ...state,
            loading: true,
          };
        case "cities/loaded":
          return {
            ...state,
            loading: false,
            cities: action.payload,
          };

        case "city/loaded":
          return {
            ...state,
            loading: false,
            currentCity: action.payload,
          };

        case "cities/created":
          return {
            ...state,
            loading: false,
            cities: [...state.cities, action.payload],
            currentCity: action.payload,
          };

        case "cities/deleted":
          return {
            ...state,
            loading: false,
            // cities:state.cities.filter((city) => (city.id !== action.payload);
            cities: state.cities.filter((city) => city.id !== action.payload),
          };

        case "rejected":
          console.error("❌ CitiesContext Error:", action.payload);
          return {
            ...state,
            loading: false,
            error: action.payload,
          };

        default:
          throw new Error("unknown action type ");
      }
    },
    initialState
  );

  useEffect(() => {
    async function fetchCities() {
      dispatch({ type: "loading" });
      try {
        // setloading(true);
        const res = await fetch("http://localhost:8000/cities");
        if (!res.ok) throw new Error("Failed to fetch cities");
        const data = await res.json();
        // setcities(data);
        dispatch({ type: "cities/loaded", payload: data });
      } catch (error) {
        // alert("error loading data!!!");
        dispatch({
          type: "rejected",
          payload: error.message || "error loading data!!!",
        });
      }
      // finally {
      //  setloading(false);
      // }
    }
    fetchCities();
  }, []);

  const getCity = useCallback(
    async function getCity(id) {
      if (Number(id) === currentCity.id) {
        return;
      }
      dispatch({ type: "loading" });
      try {
        // setloading(true);
        const res = await fetch(`http://localhost:8000/cities/${id}`);
        if (!res.ok) throw new Error("Failed to load city");
        const data = await res.json();
        // setcurrentCity(data);
        dispatch({ type: "city/loaded", payload: data });
      } catch (error) {
        dispatch({ type: "rejected", payload: error.message });
        // alert("error loading data...");
      }
      // finally {
      //   setloading(false);
      // }
    },
    [currentCity.id]
  );

  async function createCity(newCity) {
    dispatch({ type: "loading" });
    try {
      // setloading(true);
      const res = await fetch(`http://localhost:8000/cities/`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!res.ok) throw new Error("Failed to create city");
      const data = await res.json();
      // setcities((cities) => [...cities, data]);
      dispatch({ type: "cities/created", payload: data });
    } catch (error) {
      // alert("error loading creating city...");
      dispatch({ type: "rejected", payload: error.message });
    }
    // finally {
    //   setloading(false);
    // }
  }

  async function deleteCity(CityId) {
    dispatch({ type: "loading" });
    try {
      // setloading(true);
      // Step 1: Send DELETE request
      const res = await fetch(`http://localhost:8000/cities/${CityId}`, {
        method: "DELETE",
      });
      // Step 2: Handle failed response
      if (!res.ok) throw new Error("Failed to delete city");
      // Step 3: Update state safely (pure + correct return)
      // setcities((allcities) => {
      //   return allcities.filter((city) => {
      //     return city.id !== CityId;
      //   });
      // });
      dispatch({ type: "cities/deleted", payload: CityId });
    } catch (error) {
      // alert("error loading deleting city...");
      dispatch({ type: "rejected", payload: error.message });
    }
    // finally {
    //   setloading(false);
    // }
  }

  return (
    <>
      <CitiesContext.Provider
        value={{
          cities,
          loading,
          currentCity,
          getCity,
          createCity,
          deleteCity,
        }}
      >
        {children}
      </CitiesContext.Provider>
    </>
  );
};

// export function useCities() {
//   const context = useContext(CitiesContext);
//   if (!context)
//     throw new Error("useCities must be used within a CitiesProvider");
//   return context;
// }

// this funciton acts as
// function useCities() {
//   const context = useContext(CitiesContext);
//   if (context === undefined) {
//     throw new Error("city context is used outside the cities provider ");
//   }
//   return context;
// }

// Export the provider
// export default CitiesProvider;
export { CitiesProvider };
