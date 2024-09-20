import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSearchStore";
import movieDetailReducer from "./movieDetailSlice"
import savedReducer from "./savedMovies"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        gpt: gptReducer,
        movieInfo: movieDetailReducer,
        saved: savedReducer
    }
});

export default appStore;