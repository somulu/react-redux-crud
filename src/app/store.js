import { configureStore } from "@reduxjs/toolkit";
import userDetail from "../features/userDetailSlice";

export const store = configureStore({
  reducer: {
    users: userDetail,
  },
});
