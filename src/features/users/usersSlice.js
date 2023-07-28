import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchUsers, addUser, updateUser, deleteUser } from "./userApi";

// Async Thunks
export const fetchUsersAsync = createAsyncThunk("users/fetchUsers", fetchUsers);
export const createUserAsync = createAsyncThunk("users/addUser", addUser);
export const updateUserAsync = createAsyncThunk("users/updateUser", updateUser);
export const deleteUserAsync = createAsyncThunk("users/deleteUser", deleteUser);

const initialState = {
  data: null,
  status: "idle",
  error: null,
};

const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsersAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchUsersAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.data = action.payload.users;
        state.totalCount = action.payload.totalCount;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchUsersAsync.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })

      .addCase(createUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(createUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        state.users.push(action.payload);
      })
      .addCase(createUserAsync.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })

      .addCase(updateUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(updateUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const { id, name, email } = action.payload;
        const existingUser = state.users.find((user) => user.id === id);
        if (existingUser) {
          existingUser.name = name;
          existingUser.email = email;
        }
      })
      .addCase(updateUserAsync.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      })

      .addCase(deleteUserAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(deleteUserAsync.fulfilled, (state, action) => {
        state.status = "idle";
        const userId = action.payload;
        state.users = state.users.filter((user) => user.id !== userId);
      })
      .addCase(deleteUserAsync.rejected, (state, action) => {
        state.status = "error";
        state.error = action.error.message;
      });
  },
});

export default usersSlice.reducer;
