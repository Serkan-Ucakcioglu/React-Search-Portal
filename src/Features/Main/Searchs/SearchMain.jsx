import React from "react";
import logo from "../../../Svg/Logo.svg";
import Search from "../../../Svg/Search.svg";
import { useSelector } from "react-redux";
import Searched from "./Searched";
import { selectedSearch } from "../../dataSlice";
import { Link } from "react-router-dom";
import SearchInput from "./SearchInput";

function SearchMain() {
  const searchs = useSelector(selectedSearch);

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
          <Link to="search-result">
            {" "}
            <button disabled={!searchs?.length} className="search_btn">
              Search
            </button>
          </Link>
        </div>
        <Searched searchs={searchs} />
      </div>
    </>
  );
}

export default SearchMain;
