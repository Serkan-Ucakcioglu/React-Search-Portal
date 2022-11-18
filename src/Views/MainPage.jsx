import React from "react";
import AddRecord from "../Features/Main/AddRecord";
import Footer from "../Features/Main/Footer";
import SearchMain from "../Features/Main/Searchs/SearchMain";
import TopNews from "../Features/Main/TopNews";

function MainPage() {
  return (
    <>
      <div className="container">
        <div className="main_wrapper">
          <div className="add_record">
            {" "}
            <AddRecord />
          </div>
          <div className="search_main">
            <SearchMain />
          </div>
          <div className="top_news">
            <TopNews />
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
}

export default MainPage;
