import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { login, logout } from "./authApi";

// Async Thunks
export const loginUser = createAsyncThunk("auth/loginUser", login);
export const logoutUser = createAsyncThunk("auth/logoutUser", logout);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    data: null,
    isAuthenticated: Cookies.get("jwt") ? true : false,
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload;
        state.isAuthenticated = true;
        state.error = null;
        Cookies.set("userName", action.payload.user.name, { expires: 7 });
        // toast.success(action.payload?.message);
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.status = "error";
        state.isAuthenticated = false;
        state.error = action.error.message;
        // const errorMessage =
        //   action.payload?.message ||
        //   action.error.message ||
        //   "An error occurred";
        // toast.error(errorMessage);
      })

      .addCase(logoutUser.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = "idle";
        state.data = null;
        state.isAuthenticated = false;
        state.error = null;
        Cookies.remove("jwt");
        Cookies.remove("userName");
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
