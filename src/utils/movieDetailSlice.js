import { createSlice } from "@reduxjs/toolkit";

const movieDetailSlice = createSlice({
    name: "movieInfo",
    initialState: {
        movieDetail: null,
        credit: null
    },
    reducers: {
        addMovieDetails: (state, action) => {
            state.movieDetail = action.payload;
        },
        addCredit: (state, action) => {
            state.credit = action.payload;
        }
    }
});

export const {addMovieDetails, addCredit} = movieDetailSlice.actions;
export default movieDetailSlice.reducer;