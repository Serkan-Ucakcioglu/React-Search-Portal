import React from "react";
import logo from "../../Svg/Logo.svg";
import Location from "../../Svg/Location.svg";
import Search from "../../Svg/Search.svg";

function SearchMain() {
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
          <input className="search_input" type="text" />
          <button className="search_btn">Search</button>
        </div>
        <div className="search_result">
          <div className="item">
            <img src={Location} alt="Location-svg" />
            <div className="item_text">
              <span className="item_head_title">18th Street Brewery</span>
              <span>Qakley Avenue, Hammond IN</span>
            </div>
          </div>
          <div className="item">
            <img src={Location} alt="Location-svg" />
            <div className="item_text">
              <span className="item_head_title">18th Street Brewery</span>
              <span>Qakley Avenue, Hammond IN</span>
            </div>
          </div>
          <div className="item last">
            <img src={Location} alt="Location-svg" />
            <div className="item_text">
              <span className="item_head_title">18th Street Brewery</span>
              <span>Qakley Avenue, Hammond IN</span>
            </div>
          </div>
          <a href="#" className="show_text">
            Show more...
          </a>
        </div>
      </div>
    </>
  );
}

export default SearchMain;
