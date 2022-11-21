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

  const max = Math.ceil(totalCount / pageSize);
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
      {paginationRange?.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return <li className="pagination-item dots">&#8230;</li>;
        }

        return (
          <li
            className={`pagenumber ${pageNumber === currentPage && "active"}`}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
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
