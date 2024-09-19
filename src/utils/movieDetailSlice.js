import { createSlice } from "@reduxjs/toolkit";

const movieDetailSlice = createSlice({
    name: "movieInfo",
    initialState: {
        movieDetail: null,
        credit: null, 
        review: null,
        similarMovies: null
    },
    reducers: {
        addMovieDetails: (state, action) => {
            state.movieDetail = action.payload;
        },
        addCredit: (state, action) => {
            state.credit = action.payload;
        },
        addReview: (state, action) => {
            state.review = action.payload;
        },
        addSimilarMovies: (state, action) => {
            state.similarMovies = action.payload;
        }
    }
});

export const {addMovieDetails, addCredit, addReview, addSimilarMovies} = movieDetailSlice.actions;
export default movieDetailSlice.reducer;