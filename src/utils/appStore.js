import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import movieReducer from "./movieSlice";
import gptReducer from "./gptSearchStore";
import movieDetailReducer from "./movieDetailSlice"

const appStore = configureStore({
    reducer: {
        user: userReducer,
        movie: movieReducer,
        gpt: gptReducer,
        movieInfo: movieDetailReducer
    }
});

export default appStore;