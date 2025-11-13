// /* eslint-disable react/prop-types */
// import React, { createContext, useContext, useEffect, useState } from "react";

// // create a context by calling the createContext function of react
// export const CitiesContext = createContext();

// // define a context provider component
// // it will need to accept childern prop
// // so that we can use this provider component as top level component in the app component
// // name should be different than context name
// const CitiesProvider = ({ children }) => {
//   // all the states and states updating login and useEffect logic
//   const [cities, setcities] = useState([]);
//   const [currentCity, setcurrentCity] = useState({});
//   const [loading, setloading] = useState(false);


//   // this effect runs only once — right after the component mounts (i.e., when it first appears on screen)
//   useEffect(() => {
//     async function fetchCities() {
//       try {
//         setloading(true);
//         const res = await fetch("http://localhost:8000/cities");
//         const data = await res.json();
//         // console.log(data);
//         setcities(data);
//       } catch {
//         alert("error loading data!!!");
//       } finally {
//         setloading(false);
//       }
//     }
//     fetchCities();
//   }, []);

//   async function getCity(id) {
//     try {
//       setloading(true);
//       const res = await fetch(`http://localhost:8000/cities/${id}`);
//       const data = await res.json();
//       // console.log(data);
//       setcurrentCity(data);
//     } catch {
//       alert("error loading data...");
//     } finally {
//       setloading(false);
//     }
//   }

//   async function createCity(newCity) {
//     try {
//       setloading(true);
//       const res = await fetch(`http://localhost:8000/cities/`, {
//         method: "POST",
//         body: JSON.stringify(newCity),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       });
//       const data = await res.json();
//       // console.log(data);
//       setcities((cities) => [...cities, data]);
//     } catch {
//       alert("error loading creating city...");
//     } finally {
//       setloading(false);
//     }
//   }

//   async function deleteCity(CityId) {
//     try {
//       setloading(true);
//       // Step 1: Send DELETE request
//       const res = await fetch(`http://localhost:8000/cities/${CityId}`, {
//         method: "DELETE",
//       });
//       // Step 2: Handle failed response
//       if (!res.ok) throw new Error("Failed to delete city");
//       // Step 3: Update state safely (pure + correct return)
//       setcities((allcities) => {
//         return allcities.filter((city) => {
//           return city.id !== CityId;
//         });
//       });
//     } catch {
//       alert("error loading deleting city...");
//     } finally {
//       setloading(false);
//     }
//   }

//   return (
//     <>
//       {/* Makes both cities and loading available to any nested component that consumes this context */}
//       <CitiesContext.Provider
//         value={{
//           cities,
//           loading,
//           currentCity,
//           getCity,
//           createCity,
//           deleteCity,
//         }}
//       >
//         {children}
//       </CitiesContext.Provider>
//     </>
//   );
// };

// // this funciton acts as
// // function useCities() {
// //   const context = useContext(CitiesContext);
// //   if (context === undefined) {
// //     throw new Error("city context is used outside the cities provider ");
// //   }
// //   return context;
// // }

// // Export the provider
// // export default CitiesProvider;
// export { CitiesProvider };
