import { createSlice } from "@reduxjs/toolkit";
import { feedBacks } from '../ListOf/ListOfFeedback'
export const userSlice = createSlice({
    name: "feedbacks",
    initialState: { value: feedBacks },
    reducers: {
        addFeedback: (state, action) => {
            state.value.push(action.payload)
        },
        deleteFeedback: (state, action) => {
            state.value = state.value.filter((feedback) => feedback.id !== action.payload.id)
        },
        updateMessage: (state, action) => {
            state.value.map((feedback) => {
                if (feedback.id === action.payload.id) {
                    feedback.message = action.payload.message
                }
            })
        },
    },
});
export default userSlice.reducer;
export const { addFeedback, deleteFeedback, updateMessage } = userSlice.actions;