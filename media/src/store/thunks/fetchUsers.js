import { createAsyncThunk } from "@reduxjs/toolkit";

const fetchUsers = createAsyncThunk(
  "users/fetch",
  async (_, { rejectWithValue }) => {
    const response = await fetch("http://localhost:3005/users");

    // DEV ONLY!!!
    await pause(2000);
    return await response.json();
});

// DEV ONLY!!!
const pause = (duration) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

export { fetchUsers };
