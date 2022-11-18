import { configureStore } from "@reduxjs/toolkit";
import dataSlice from "../Features/dataSlice";
const store = configureStore({
  reducer: {
    dataSlice,
  },
});
export default store;
