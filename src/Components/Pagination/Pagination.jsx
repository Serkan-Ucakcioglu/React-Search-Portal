import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectedSearch } from "../../Features/dataSlice";
import PaginationItem from "./PaginationItem";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const data = useSelector(selectedSearch);
  const newData = useMemo(() => {
    const lastRecord = currentPage * recordsPerPage;
    const firstRecord = lastRecord - recordsPerPage;
    return data.slice(firstRecord, lastRecord);
  }, [currentPage, data]);

  return (
    <div className="container mt-5">
      <PaginationItem
        pages={data?.length}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Pagination;
