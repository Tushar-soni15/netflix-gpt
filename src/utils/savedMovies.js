import { createSlice } from "@reduxjs/toolkit";

const savedMovies = createSlice({
    name: "savedMovies",
    initialState: {
        savedMovies: [],
    },
    reducers: {
        saveMovie: (state, action) => {
            const movie = action.payload;
            const existingMovie = state.savedMovies.find((m) => m.id === movie.id);
            if (!existingMovie) {
                state.savedMovies.push(movie); // Add movie to list
            }
        },
        removeMovie: (state, action) => {
            const movieId = action.payload;
            state.savedMovies = state.savedMovies.filter((movie) => movie.id !== movieId); // Remove movie by ID
        },
    }
})

export const { saveMovie, removeMovie } = savedMovies.actions;
export default savedMovies.reducer;