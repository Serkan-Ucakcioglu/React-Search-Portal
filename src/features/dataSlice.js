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
  search: [],
  lastSearch: JSON.parse(localStorage.getItem("lastSearch")) || "",
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
    lastSearchs: (state, { payload }) => {
      state.lastSearch = payload;
      localStorage.setItem("lastSearch", JSON.stringify(payload));
    },
    search: (state, { payload }) => {
      state.search = payload;
    },
  },
});

export const selectedData = (state) => state.dataSlice.data;
export const selectedLast = (state) => state.dataSlice.lastSearch;
export const selectedSearch = (state) => state.dataSlice.search;
export const { addRecord, lastSearchs, search } = dataSlice.actions;
export default dataSlice.reducer;
