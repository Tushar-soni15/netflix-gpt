import { createSlice } from "@reduxjs/toolkit";

const gptSearchSlice = createSlice({
    name: "gptSearch",
    initialState: {
        gptBtnState: false,
    },
    reducers: {
        toggleSearchBtn: (state) => {
            state.gptBtnState = !state.gptBtnState
        }
    }
});

export const {toggleSearchBtn} = gptSearchSlice.actions;

export default gptSearchSlice.reducer;