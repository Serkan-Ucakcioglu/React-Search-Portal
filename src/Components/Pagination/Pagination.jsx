import React, { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { selectedData } from "../../Features/dataSlice";
import PaginationItem from "./PaginationItem";
import Records from "./Records";

function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const [recordsPerPage] = useState(10);

  const data = useSelector(selectedData);

  const newData = useMemo(() => {
    const lastRecord = currentPage * recordsPerPage;
    const firstRecord = lastRecord - recordsPerPage;
    return data.slice(firstRecord, lastRecord);
  }, [currentPage, data]);

  return (
    <div className="container mt-5">
      <Records data={newData} />
      <PaginationItem
        pages={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
}

export default Pagination;
