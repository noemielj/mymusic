import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: { nickname: null, places: [] },
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateNickname: (state, action) => {
      state.value.nickname = action.payload;
    },
    importPlaces: (state, action) => {
      state.value.places = action.payload; //nv liste de marqueurs
    },
    addPlace: (state, action) => {
      state.value.places.push(action.payload);
    },
    removePlace: (state, action) => {
      state.value.places = state.value.places.filter(
        (e) => e.name !== action.payload
      );
    },
  },
});

export const { updateNickname, addPlace, removePlace, importPlaces } =
  userSlice.actions;
export default userSlice.reducer;
