import { createSlice } from "@reduxjs/toolkit";
import dbjson from "../db.json";

// data
let db = dbjson;

const data = db.data.map((info) =>
  db.cols.map((_, i) => [db.cols[i], info[i]])
);
// data to be used
const newData = data.map((arr) => Object.fromEntries(arr));
const initialState = {
  data: newData,
};

const dataSlice = createSlice({
  name: "dataSlice",
  initialState,
  reducers: {
    addData: (state, { payload }) => {
      state.data = payload;
    },
  },
});

export const selectedData = (state) => state.dataSlice.data;
export const { addData } = dataSlice.actions;
export default dataSlice.reducer;
