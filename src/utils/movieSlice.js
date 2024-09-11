import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        trailerInfo: null
    },
    reducers: {
        addNowPlayMovieList: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addTrailerinfo: (state, action) => {
            state.trailerInfo = action.payload;
        }
    }
});

export const {addNowPlayMovieList, addTrailerinfo} = movieSlice.actions;
export default movieSlice.reducer;
