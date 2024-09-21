import { createSlice } from "@reduxjs/toolkit";

const savedMovies = createSlice({
    name: "savedMovies",
    initialState: {
        savedMovies: [], // For storing saved movies
        likedMovies: []  // For storing liked movies
    },
    reducers: {
        saveMovie: (state, action) => {
            const movie = action.payload;
            const existingMovie = state.savedMovies.find((m) => m.id === movie.id);
            if (!existingMovie) {
                state.savedMovies.push(movie); // Add movie to the savedMovies list
            }
        },
        removeMovie: (state, action) => {
            const movieId = action.payload;
            state.savedMovies = state.savedMovies.filter((movie) => movie.id !== movieId); // Remove movie from savedMovies
        },
        likeMovie: (state, action) => {
            const movie = action.payload;
            const isAlreadyLiked = state.likedMovies.find((m) => m.id === movie.id);
            if (!isAlreadyLiked) {
                state.likedMovies.push(movie); // Add movie to likedMovies if not already there
            }
        },
        unlikeMovie: (state, action) => {
            const movieId = action.payload;
            state.likedMovies = state.likedMovies.filter((movie) => movie.id !== movieId); // Remove movie from likedMovies
        }
    }
});

export const { saveMovie, removeMovie, likeMovie, unlikeMovie } = savedMovies.actions;
export default savedMovies.reducer;
