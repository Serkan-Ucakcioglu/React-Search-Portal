import React from "react";
import logo from "../../Svg/Logo.svg";
function SearchMain() {
  return (
    <>
      <div className="search_head">
        <img className="logo" src={logo} alt="TESODEV-LOGO" />
        <span className="search_head_title">Search app</span>
      </div>
    </>
  );
}

export default SearchMain;
