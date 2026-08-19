import { createAsyncThunk } from "@reduxjs/toolkit";
import { User } from "../slices/usersSlice";

const fetchUsers = createAsyncThunk<User[]>(
  "users/fetch",
  async () => {
    const response = await fetch("http://localhost:3005/users");

    // DEV ONLY!!!
    await pause(2000);
    return await response.json();
});

// DEV ONLY!!!
const pause = (duration: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, duration);
  });
}

export { fetchUsers };