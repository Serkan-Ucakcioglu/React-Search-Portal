import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../Features/dataSlice";
export const store = configureStore({
  reducer: {
    dataSlice,
  },
});
