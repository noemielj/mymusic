import { createSlice } from '@reduxjs/toolkit';


const initialState = {
	value: {
		username: null,
		token: null,
	},
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUserInfosToStore: (state, action) => {
			state.value.token = action.payload.token;
      		state.value.username = action.payload.username;
		},
	},
});

export const { addUserInfosToStore } = userSlice.actions;
export default userSlice.reducer;
