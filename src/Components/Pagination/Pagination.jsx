import { usePagination, DOTS } from "../../Hooks/usePagination";
const Pagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  const content = paginationRange?.map((pageNumber) => {
    if (pageNumber === DOTS) {
      return <li className="pagination-item dots">...</li>;
    }

    return (
      <li
        className={`pagenumber ${pageNumber === currentPage && "active"}`}
        onClick={() => onPageChange(pageNumber)}
      >
        {pageNumber}
      </li>
    );
  });

  const max = Math.ceil(totalCount / pageSize); // max page
  if (currentPage === 0 || paginationRange.length < 2) return null;
  return (
    <ul className="pagi_list">
      <li
        className="prev"
        onClick={() => {
          if (currentPage > 1) {
            onPageChange(currentPage - 1);
          }
        }}
      >
        Previous
      </li>
      {content}
      <li
        className="prev"
        onClick={() => {
          if (currentPage < max) {
            onPageChange(currentPage + 1);
          }
        }}
      >
        Next
      </li>
    </ul>
  );
};

export default Pagination;
