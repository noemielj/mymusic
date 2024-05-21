import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { username: null, cities: [] },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.value.username = action.payload;
    },
    addCity: (state, action) => {
      state.value.cities.push(action.payload);
    },
    removeCity: (state, action) => {
      state.value.cities = state.value.cities.filter(
        (city) => city.name !== action.payload
      );
    },
  },
});

export const { setUsername, addCity, removeCity } = userSlice.actions;
export default userSlice.reducer;
