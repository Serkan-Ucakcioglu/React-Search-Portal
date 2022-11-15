import React from "react";

function PaginationItem({ pages, currentPage, setCurrentPage }) {
  const pageNumList = [...Array(pages).keys()].map((el) => el + 1);

  const next = () => {
    if (currentPage !== pages) setCurrentPage(currentPage + 1);
  };
  const prev = () => {
    if (currentPage !== 1) setCurrentPage(currentPage - 1);
  };

  const content = pageNumList.map((pagiNum) => (
    <>
      <li key={pagiNum}>
        <span
          onClick={() => setCurrentPage(pagiNum)}
          className={`${pagiNum === currentPage && "cd"}`}
        >
          {pagiNum}
        </span>
      </li>
    </>
  ));
  return (
    <nav>
      <ul className="pagination justify-content-center">
        <li className="page-item">
          <span className="page-link" onClick={prev}>
            Prev
          </span>
        </li>
        {content}
        <li className="page-item">
          <span className="page-link" onClick={next}>
            Next
          </span>
        </li>
      </ul>
    </nav>
  );
}

export default PaginationItem;
