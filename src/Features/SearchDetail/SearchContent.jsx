import React from "react";
import { useSelector } from "react-redux";
import { selectedSearch } from "../dataSlice";
import Location from "../../Svg/Location.svg";

function SearchContent() {
  const searchs = useSelector(selectedSearch);
  return (
    <div className="detail_content">
      <div className="item_list">
        <div className="item">
          <div className="info">
            <img src={Location} alt="" />
            <div className="info_text">
              <span>serkan</span>
              <span>serkan</span>
            </div>
          </div>
          <div className="name">
            <span>name</span>
            <span>date</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchContent;
