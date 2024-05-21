import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activities: [],
};

export const activitiesSlice = createSlice({
	name: 'activities',
	initialState,
	reducers: {
		timerStart: (state, action) => {
			state.value.push(action.payload);
		},
		timerStop: (state, action) => {
			state.value.push(action.payload);
		},
		deleteActivities: (state, action) => {
			const { id } = action.payload;
			state.activities = state.activities.filter(activity => activity.id !== id);
		},
		addActivity: (state, action) => {
			state.activities.push(action.payload);
		  },
	},
});

export const { timerStart, timerStop, deleteActivities, addActivity} = activitiesSlice.actions;
export default activitiesSlice.reducer;