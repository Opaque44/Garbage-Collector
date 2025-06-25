import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoginModelOpen: false,
  isRegisterModelOpen: false,
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    openLoginModel: (state) => {
      state.isLoginModelOpen = state.isLoginModelOpen = !state.isLoginModelOpen;
    },
    openRegisterModel: (state) => {
      state.isRegisterModelOpen = !state.isRegisterModelOpen;
    },
  },
});

export const { openLoginModel, openRegisterModel } = uiSlice.actions;
export default uiSlice.reducer;
