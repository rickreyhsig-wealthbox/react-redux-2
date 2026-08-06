import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk(
  "users/fetch",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3005/users");

    return await response.json();
});

export { fetchUsers };
