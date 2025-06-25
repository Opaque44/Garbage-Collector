import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import authModel from "../../models/auth.model";

// ==============================
// Async Thunks
// ==============================

export const createUser = createAsyncThunk(
  "users/register",
  async (data, { rejectWithValue }) => {
    try {
      console.log(data);

      const response = await authModel.createUser(data);
      // console.log("Response from createUser:", response);
      return response;
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message);
    }
  }
);

// ==============================
// Initial State
// ==============================

const initialState = {
  userData: [],
  loading: false,
  error: null,
};

// ==============================
// Slice
// ==============================

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      // ======create user========
      .addCase(createUser.pending, state => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.loading = false;
        state.userData = action.payload;
      })
      .addCase(createUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// ==============================
// Export Reducer
// ==============================e
export default authSlice.reducer;
