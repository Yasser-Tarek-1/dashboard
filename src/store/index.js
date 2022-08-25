import { configureStore } from "@reduxjs/toolkit";

import mode from "./darkModeSlice";
import auth from "./authSlice";

const store = configureStore({
  reducer: {
    mode,
    auth,
  },
});

export default store;
