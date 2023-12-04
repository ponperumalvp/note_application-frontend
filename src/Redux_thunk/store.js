import { configureStore } from "@reduxjs/toolkit";
import { noteReducer } from "./noteSlice";
import { userReducer } from "./userSlice";

export const store = configureStore({
  reducer: {
    notes: noteReducer,
    users: userReducer,
  },
});
