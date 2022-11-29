import { configureStore } from "@reduxjs/toolkit";
import feedBackReducer from '../Redux/feedbackSlice'
export default configureStore({
    reducer: {
        feedbacks: feedBackReducer,
    }
})