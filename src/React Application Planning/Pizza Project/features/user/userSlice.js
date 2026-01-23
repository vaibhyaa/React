import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getAddress } from "../../services/apiGeocoding.js";

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

// this is async function because it make API call and wait for response
// this function used in CreateOrder.jsx to fetch some information about user and it is address
export const fetchAddress = createAsyncThunk("user/fetchAddress", async () => {
  // 1) We get the user's geolocation position
  // it get the user current position latitude and longitude when we call getPosition function it return promise so we use await here
  const positionObj = await getPosition();
  const position = {
    latitude: positionObj.coords.latitude,
    longitude: positionObj.coords.longitude,
  };

  // 2) Then we use a reverse geocoding API to get a description of the user's address, so we can display it the order form, so that the user can correct it if wrong
  const addressObj = await getAddress(position);
  const address = `${addressObj?.locality}, ${addressObj?.city} ${addressObj?.postcode}, ${addressObj?.countryName}`;

  // 3) Then we return an object with the data that we are interested in
  // payload of fulfilled action
  return { position, address };
});
const initialState = {
  // userName: "Vaibhav",
  userName: "",
  status: "idle",
  position: {},
  address: "",
  error: "",
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
  extraReducers: (builder) => {
    builder
      .addCase(fetchAddress.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchAddress.fulfilled, (state, action) => {
        state.status = "idle";
        state.position = action.payload.position;
        state.address = action.payload.address;
      })
      .addCase(fetchAddress.rejected, (state,action) => {
        state.status = "error";
        state.error = action.error.message;
      });
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

export function getPosition() {
  return new Promise(function (resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  });
}

// export async function fetchAddress() {}
