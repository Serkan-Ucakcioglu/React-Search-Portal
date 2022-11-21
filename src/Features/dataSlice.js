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
  search: JSON.parse(localStorage.getItem("searchList")) || [],
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
        alert("Başarıyla Eklendi");
      } else {
        alert("Eklenemedi");
      }
      localStorage.setItem("allData", JSON.stringify(state.data));
    },
    lastSearchs: (state, { payload }) => {
      state.lastSearch = payload;
      localStorage.setItem("lastSearch", JSON.stringify(payload));
    },
    search: (state, { payload }) => {
      state.search = payload;
      localStorage.setItem("searchList", JSON.stringify(state.search));
    },
    nameasc: (state) => {
      state.search = state.search.sort((a, b) =>
        a["Name Surname"].localeCompare(b["Name Surname"])
      );
    },
    namedesc: (state) => {
      state.search = state.search.sort((a, b) =>
        b["Name Surname"].localeCompare(a["Name Surname"])
      );
    },
    dateasc: (state) => {
      // tarihi unix timestamp'e çevirir
      const unixDates = state?.search?.map((user) => {
        const [day, month, year] = user?.Date?.split("/");
        return { ...user, Date: new Date(`${month}/${day}/${year}`).getTime() };
      });
      const sortedUnixDates = unixDates.sort((a, b) => a.Date - b.Date);

      // sıralanmış unix timestamp'ı tarihe çevirir
      const sortedDates = sortedUnixDates?.map((user) => {
        const date = new Date(user.Date);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return { ...user, Date: `${day}/${month}/${year}` };
      });
      state.search = sortedDates;
    },
    datedesc: (state) => {
      // tarihi unix timestamp'e çevirir
      const unixDates = state?.search?.map((user) => {
        const [day, month, year] = user?.Date?.split("/");
        return { ...user, Date: new Date(`${month}/${day}/${year}`).getTime() };
      });
      const sortedUnixDates = unixDates.sort((a, b) => b.Date - a.Date);

      // sıralanmış unix timestamp'ı tarihe çevirir
      const sortedDates = sortedUnixDates?.map((user) => {
        const date = new Date(user.Date);
        const day = date.getDate();
        const month = date.getMonth() + 1;
        const year = date.getFullYear();
        return { ...user, Date: `${day}/${month}/${year}` };
      });

      state.search = sortedDates;
    },
  },
});

export const selectedData = (state) => state.dataSlice.data;
export const selectedLast = (state) => state.dataSlice.lastSearch;
export const selectedSearch = (state) => state.dataSlice.search;
export const {
  addRecord,
  lastSearchs,
  search,
  nameasc,
  namedesc,
  dateasc,
  datedesc,
} = dataSlice.actions;
export default dataSlice.reducer;
