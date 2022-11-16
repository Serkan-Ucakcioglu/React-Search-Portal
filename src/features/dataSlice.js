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
    addRecord: (state, { payload }) => {
      let checkUser = state.data.find(
        (user) => user.Email.toLowerCase() === payload.Email.toLowerCase()
      );
      if (!checkUser) {
        state.data.push(payload);
      }
    },
  },
});

export const selectedData = (state) => state.dataSlice.data;
export const { addRecord } = dataSlice.actions;
export default dataSlice.reducer;
