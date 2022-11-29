// import { async } from "@firebase/util";
// import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
// import { act } from "react-dom/test-utils";

// // export const getFilm = createAsyncThunk('films/getFilm', async () => {
// //     const res = await fetch(`https://635dce5ced25a0b5fe3a2e30.mockapi.io/Films`);
// //     const data = await res.json();
// //     return data;
// // })


// const filmSlice = createSlice({
//     name: 'films',
//     initialState: {
//         list: [],
//         status: null,
//     },
//     // extraReducers: {
//     //     [getFilm.pending]: (state) => {
//     //         state.status = 'loading';
//     //     },
//     //     [getFilm.rejected]: (state, action) => {
//     //         state.status = 'failed';
//     //     },
//     //     [getFilm.fulfilled]: (state, { payload }) => {
//     //         state.list = payload;
//     //         state.status = 'success';
//     //     },
//     //     [updateFilm.pending]: (state) => {
//     //         state.status = 'update loading';
//     //     },
//     //     [updateFilm.rejected]: (state, action) => {
//     //         state.status = 'update failed';
//     //     },
//     //     [updateFilm.fulfilled]: (state, { payload }) => {
//     //         state.list = payload;
//     //         state.status = 'update success';
//     //     }
//     // }
//     // reducers: {
//     //     addFilm: (state, action) => {
//     //         state.list.push(action.payload);
//     //     },
//     //     updateFilm: (state, action) => {
//     //         state.list.map(film => {
//     //             if (film.id === action.payload.id) {
//     //                 film.image = action.payload.image;
//     //                 film.title = action.payload.title;
//     //                 film.type = action.payload.type;
//     //                 film.duration = action.payload.duration;
//     //                 film.year = action.payload.year;
//     //                 film.nation = action.payload.nation;
//     //                 film.director = action.payload.director;
//     //                 film.info = action.payload.info;
//     //                 film.trailer = action.payload.trailer;
//     //                 film.hot = action.payload.hot;
//     //             }
//     //         })
//     //     },
//     //     deleteFilm: (state, action) => {
//     //         state.list = state.list.filter(film => film.id !== action.payload.id
//     //         )
//     //     }
//     // }
// })

// export default filmSlice.reducer;
// // export const { addFilm, updateFilm, deleteFilm } = filmSlice.actions;