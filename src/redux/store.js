import { configureStore } from "@reduxjs/toolkit";
import uiSliceReducer from "./slices/uiSlice";
import userSliceReducer from "./slices/authSlice";

export const store = configureStore({
  reducer: {
    ui: uiSliceReducer,
    user: userSliceReducer,
  },
});
