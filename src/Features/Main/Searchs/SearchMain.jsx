import React from "react";
import logo from "../../../Svg/Logo.svg";
import Search from "../../../Svg/Search.svg";
import { useDispatch, useSelector } from "react-redux";
import db from "../../../db.json";
import {
  lastSearchs,
  search,
  selectedData,
  selectedLast,
  selectedSearch,
} from "../../dataSlice";
import Searched from "./Searched";

function SearchMain() {
  const keys = db.cols;
  const dispatch = useDispatch();

  const lastSearch = useSelector(selectedLast);
  const data = useSelector(selectedData);
  const searchs = useSelector(selectedSearch);

  const onChanges = (e) => {
    const { value } = e.target;
    dispatch(lastSearchs(value));
    dispatch(
      search(
        data.filter((user) =>
          keys.some((key) =>
            user[key].toUpperCase().includes(value.toUpperCase())
          )
        )
      )
    );
  };
  return (
    <>
      <div className="search_head">
        <img className="logo" src={logo} alt="TESODEV-LOGO" />
        <span className="search_head_title">Search app</span>
      </div>
      <div className="search_content">
        <h1>Find in records</h1>
        <div className="search">
          <img className="search_svg" src={Search} alt="search-svg" />
          <input
            value={lastSearch}
            onChange={onChanges}
            className="search_input"
            type="text"
          />
          <button disabled={!searchs?.length} className="search_btn">
            Search
          </button>
        </div>
        <Searched searchs={searchs} />
      </div>
    </>
  );
}

export default SearchMain;
