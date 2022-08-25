import { createSlice } from "@reduxjs/toolkit";

const initialState = { darkMode: localStorage.getItem("mode") || false };

const darkModeSlice = createSlice({
  name: "mode",
  initialState,
  reducers: {
    darkModeState: (state) => {
      state.darkMode = true;
      localStorage.setItem("mode", true);
    },
    lightModeState: (state) => {
      state.darkMode = false;
      localStorage.setItem("mode", false);
    },
    toggleModeState: (state) => {
      state.darkMode = !state.darkMode;
      localStorage.setItem("mode", !state.darkMode);
    },
  },
});

export const { darkModeState, lightModeState, toggleModeState } =
  darkModeSlice.actions;

export default darkModeSlice.reducer;
