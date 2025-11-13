/* eslint-disable react/prop-types */
import React, { useContext, useEffect, useState } from "react";
import style from "./Map.module.css";
import { useNavigate } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMap,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { CitiesContext } from "../Context/CitiesContext_useReducer";
import useUrlPosition from "../hooks/useUrlPosition";

const Map = () => {
  const { cities } = useContext(CitiesContext);

  //  What useNavigate is
  // useNavigate is a hook from React Router v6+.
  // It gives you a navigate function that you can call inside your component.
  // That function is used to programmatically change the current route (instead of using <Link> or <NavLink>) this is declratice way
  // this is imperative way

  //   useSearchParams is a React Router hook.
  // It allows you to read and modify the URL query parameters in a React component.
  //   searchParams.get("lat")
  // searchParams is like a URLSearchParams object.
  // get("lat") retrieves the value of the query parameter lat from the URL
  // const [searchParams, setSearchParam] = useSearchParams();
  // const mapLat = Number(searchParams.get("lat") || "0");
  // const mapLng = Number(searchParams.get("lng") || "0");

  const DEFAULT_POSITION = [31.653381399664, 22.5];
  const [mapLat, mapLng] = useUrlPosition();
  const [mapPosition, setmapPosition] = useState(DEFAULT_POSITION);

  useEffect(() => {
    // Convert safely
    const lat = Number(mapLat);
    const lng = Number(mapLng);

    // If valid lat/lng (not NaN, not zero)
    if (!isNaN(lat) && !isNaN(lng) && !(lat === 0 && lng === 0)) {
      // console.log("Valid lat/lng:", lat, lng);
      setmapPosition([lat, lng]);
    } else {
      // console.log("Using default map position");
      setmapPosition(DEFAULT_POSITION);
    }
  }, [mapLat, mapLng]);

  // useEffect(() => {
  //   // If either lat or lng is undefined, null, or not a valid number,
  //   // → isNaN(lat) or isNaN(lng) becomes true.
  //   // In that case, return null; stops rendering that <Marker> for this city
  //   if (!isNaN(mapLat) && !isNaN(mapLng)) {
  //     console.log(mapLat, mapLng);
  //     setmapPosition([mapLat, mapLng]);
  //   }
  // }, [mapLat, mapLng]);

  return (
    <>
      <div className={style.mapContainer}>
        <MapContainer
          center={mapPosition}
          zoom={7}
          scrollWheelZoom={true}
          className={style.map}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          {/* this cities we got when we click on start tracking now and only purpose of this is to put pupop on each citylist cities which we got  */}
          {cities.map((city) => {
            // console.log(city);

            // const { lat, lng } = city.position || {};
            // This line uses object destructuring.
            // city.position is supposed to be an object like { lat: 18.5, lng: 73.8 }.
            // But if for some reason city.position is undefined or null, then accessing city.position.lat would cause an error.
            // So, the || {} part ensures safety:
            // If city.position exists → destructure lat and lng normally.
            // If it doesn’t exist → use {} (an empty object) instead, so lat and lng become undefined safely

            const { lat, lng } = city.position || {};
            if (isNaN(lat) || isNaN(lng)) return null; // skip invalid markers
            return (
              <Marker
                key={city.id}
                position={[city.position.lat, city.position.lng]}
              >
                <Popup>
                  s{" "}
                  <strong>
                    {city.emoji} {city.cityName}
                  </strong>
                  <br />
                  {city.notes ? city.notes : "No notes added yet."}
                </Popup>
              </Marker>
            );
          })}
          <ChangeCenter position={mapPosition} />
          <DetectClick />
        </MapContainer>
      </div>
      {/* <button
        onClick={() => {
          setSearchParam({ lat: 23, lng: 50 });
        }}
      >
        change position ..!
      </button> */}
    </>
  );
};

// this function when we click on an new city position changes and w.r to this position change map position also changes
function ChangeCenter({ position }) {
  const map = useMap();
  useEffect(() => {
    map.setView(position);
  }, [map, position]);

  return null;
}
// function ChangeCenter({ position }) {
//   const map = useMap();
//   useEffect(() => {
//     if (
//       position &&
//       Array.isArray(position) &&
//       !isNaN(position[0]) &&
//       !isNaN(position[1])
//     ) {
//       map.setView(position);
//     }
//   }, [map, position]);
//   return null;
// }
// here when we click on any position on map the form open and with that we also the the lat and lng of that position where we clicked on that map and updated on that url as global state and we can use that values later at other task as power of url and store that state on the url

// function DetectClick() {
//   // you call useNavigate() — this is a React Router hook that gives you a function (navigate) which can be used to change routes programmatically
//   // navigate("form") → takes you to /currentRoute/form
//   // If you were currently on /app, it becomes /app/form
//   const navigate = useNavigate();
//   useMapEvent({
//     // click: (e) => navigate("form"),
//     click: (e) => {
//       // console.log("Clicked at:", e.latlng);
//       navigate(`form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
//     },
//   });
// }

function DetectClick() {
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => {
      const { lat, lng } = e.latlng;
      if (!isNaN(lat) && !isNaN(lng)) {
        navigate(`form?lat=${lat}&lng=${lng}`);
      }
    },
  });
}
// This is the most powerful piece:
// useMapEvent() listens for events on the Leaflet map.
// On every click, it gets the e.latlng object (e.g. { lat: 18.5, lng: 73.9 }).
// Then it programmatically navigates to:
// /app/form?lat=18.5&lng=73.9
// That updates the browser’s URL but doesn’t reload the page.
// ✅ The new coordinates in the URL automatically update useUrlPosition() → which triggers the useEffect above → which updates mapPosition → which re-centers the map.

export default Map;

// useSearchParams is used to read/write query parameters in React Router.
// searchParams.get("key") fetches the value of a parameter.
// || "default" ensures a fallback value.
// setSearchParam({...}) updates the URL without page reload

// Your app might have a “catch-all” or base route like / or * that redirects somewhere.
// Browser’s behavior: On some development setups, URLs are treated case-insensitively (especially on Windows file systems), so "Form" and "form" can both load the page

//for default position
// const DEFAULT_POSITION = [40, 20];
// const [mapPosition, setMapPosition] = useState(DEFAULT_POSITION);s
// useEffect(() => {
//   const lat = Number(mapLat);
//   const lng = Number(mapLng);

//   if (!isNaN(lat) && !isNaN(lng) && !(lat === 0 && lng === 0)) {
//     console.log(lat, lng);
//     setMapPosition([lat, lng]);
//   } else {
//     setMapPosition(DEFAULT_POSITION);
//   }
// }, [mapLat, mapLng]);

// // 🖱️ User clicks on map
//         ↓
// 📍 DetectClick() captures lat/lng
//         ↓
// 🧭 navigate(`form?lat=18.5&lng=73.9`)
//         ↓
// 🌐 URL updates (no reload)
//         ↓
// 🪝 useUrlPosition() reads new coords
//         ↓
// ⚙️ useEffect() updates mapPosition
//         ↓
// 🗺️ ChangeCenter() re-centers the map
//         ↓
// 📄 Form page shows lat/lng in input fields
