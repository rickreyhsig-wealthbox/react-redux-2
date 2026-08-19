import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { User } from "../slices/usersSlice";

const removeUser = createAsyncThunk<User, User>(
  "users/remove",
  async (user) => {
    await axios.delete(`http://localhost:3005/users/${user.id}`);

    return user;
});


export { removeUser };