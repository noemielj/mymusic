import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type UserState = {
  value: {
    email: string | null;
    photoUris: string[];
  };
};

const initialState: UserState = {
  value: { email: null, photoUris: []  },
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateEmail: (state, action: PayloadAction<string>) => {
      state.value.email = action.payload;
    },
    savePhotoUri: (state, action: PayloadAction<string>) => {
      state.value.photoUris.push(action.payload);
    },
    deletePhotoUri: (state, action: PayloadAction<string>) => {
      state.value.photoUris = state.value.photoUris.filter(
        (uri) => uri !== action.payload
      );
    }, 
  },
});

export const { updateEmail, savePhotoUri, deletePhotoUri } = userSlice.actions;
export default userSlice.reducer;
