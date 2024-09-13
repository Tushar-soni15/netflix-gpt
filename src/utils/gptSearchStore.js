import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: "gptSearch",
    initialState: {
        gptBtnState: false,
        movienames: null,
        movieResults: null
    },
    reducers: {
        toggleSearchBtn: (state) => {
            state.gptBtnState = !state.gptBtnState
        },
        addGptMovieResult: (state, action) => {
            const {movienames, movieResults} = action.payload
            state.gptMovies = movieResults;
            state.gptMovies = movienames;
        }
    }
});

export const {toggleSearchBtn, addGptMovieResult} = gptSearchSlice.actions;

export default gptSearchSlice.reducer;