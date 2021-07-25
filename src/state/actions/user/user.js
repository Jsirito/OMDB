import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const sendLoginRequest = createAsyncThunk("LOGIN", (user) => {
  return axios
    .post("http://localhost:3001/api/routes/login", user)
    .then((user) => user.data);
});
  