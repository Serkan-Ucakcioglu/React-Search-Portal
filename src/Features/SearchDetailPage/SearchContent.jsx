import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  nameasc,
  namedesc,
  dateasc,
  datedesc,
  selectedSearch,
} from "../dataSlice";
import Orders from "../../Svg/Orders.svg";
import SearchList from "./SearchList";
import Pagination from "../../Components/Pagination/Pagination";

let PageSize = 5;

function SearchContent() {
  const dispatch = useDispatch();
  const searchs = useSelector(selectedSearch);
  const [show, setShow] = useState(false);

  const [currentPage, setCurrentPage] = useState(1);

  const currentSearchData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return searchs?.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, searchs]);

  return (
    <div className="detail_content">
      <div className="item_list">
        {currentSearchData?.map((user) => (
          <SearchList user={user} />
        ))}
      </div>
      <div className="order">
        <button className="order_btn" onClick={() => setShow((prev) => !prev)}>
          <img src={Orders} alt="orders" />
          Order By
        </button>
        {show && (
          <ul>
            <li onClick={() => dispatch(nameasc())}>Name ascending</li>{" "}
            <li onClick={() => dispatch(namedesc())}>Name descending</li>{" "}
            <li onClick={() => dispatch(dateasc())}>Year ascending</li>{" "}
            <li onClick={() => dispatch(datedesc())}>Year descending</li>
          </ul>
        )}
      </div>
      <div className="pagi">
        <Pagination
          currentPage={currentPage}
          totalCount={searchs?.length}
          pageSize={PageSize}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}
export default SearchContent;
