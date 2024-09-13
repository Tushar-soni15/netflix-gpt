import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name: "movie",
    initialState: {
        nowPlayingMovies: null,
        trailerInfo: null,
        popularMovies: null,
        upcomingMovies: null,
        topRated: null
    },
    reducers: {
        addNowPlayMovieList: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovieList: (state, action) => {
            state.popularMovies = action.payload
        },
        addUpcomingMovieList: (state, action) => {
            state.upcomingMovies = action.payload
        },
        addTopRatedMovie: (state, action) => {
            state.topRated = action.payload
        },
        addTrailerinfo: (state, action) => {
            state.trailerInfo = action.payload;
        }
    }
});

export const {addNowPlayMovieList, addTrailerinfo, addPopularMovieList, addUpcomingMovieList, addTopRatedMovie} = movieSlice.actions;
export default movieSlice.reducer;
