import React from "react";
import logo from "../../../Svg/Logo.svg";
import Search from "../../../Svg/Search.svg";
import { useSelector } from "react-redux";
import Searched from "./Searched";
import { selectedSearch } from "../../dataSlice";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";
import useSearchs from "../../../Hooks/useSearchs";

function SearchMain() {
  const searchs = useSelector(selectedSearch);
  const { lastSearch } = useSearchs();
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
          <SearchInput />
          {lastSearch.length > 2 && searchs.length ? (
            <Link to="search-result">
              {" "}
              <button className="search_btn">Search</button>
            </Link>
          ) : (
            <button className="search_btn" disabled>
              {" "}
              Search
            </button>
          )}
        </div>
        <Searched searchs={searchs} />
      </div>
    </>
  );
}

export default SearchMain;
