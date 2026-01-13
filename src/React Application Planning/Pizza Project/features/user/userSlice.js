import { createSlice } from "@reduxjs/toolkit";

// createSlice is a helper function that:
// Creates reducers
// Creates action creators
// Combines everything into one place

// This is the default data stored in Redux when the app loads. (like below)
// {
//   user: {
//     userName: "Vaibhav"
//   }
// }
const initialState = {
  // userName: "Vaibhav",
  userName: "",
};

// This is the heart of Redux Toolkit. (i.e slice )
// A slice is: One part of the global state
// Includes: state , reducers , actions
// Here, the slice name is "user".
const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateName(state, action) {
      // Redux Toolkit way ✅
      // You can directly mutate state.
      state.userName = action.payload;
    },
  },
});

export const { updateName } = userSlice.actions;

// This reducer goes into the Redux store
export default userSlice.reducer;





// floe :-
// UI → dispatch(action)
//         ↓
//      reducer
//         ↓
//      store updates
//         ↓
//      UI re-renders

/*
function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

async function fetchAddress() {
  // 1) We get the user's geolocation position
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  return { position, address };
}

*/
