import React from "react";
import AddRecord from "../Features/Main/AddRecord";
import SearchMain from "../Features/Main/SearchMain";

function MainPage() {
  return (
    <div className="container">
      <div className="main_wrapper">
        <div className="add_record">
          {" "}
          <AddRecord />
        </div>
        <div className="search_main">
          <SearchMain />
        </div>
      </div>
    </div>
  );
}

export default MainPage;