import { createReducer } from "@reduxjs/toolkit";
import { sendLoginRequest } from "../actions/user/user";

const userReducer = createReducer([], {
  [sendLoginRequest.fulfilled]: (state, action) => action.payload,
});

export default userReducer;
