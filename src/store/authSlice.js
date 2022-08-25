import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentUser: JSON.parse(localStorage.getItem("user")) || null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.currentUser = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
      console.log(action.payload);
    },
    logout: (state) => {
      state.currentUser = null;
      localStorage.setItem("user", null);
    },
  },
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
