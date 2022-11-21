import { useMemo } from "react";

export const DOTS = "...";

const range = (start, end) => {
  let length = end - start + 1;
  return Array.from({ length }, (_, idx) => idx + start);
};

export function usePagination({
  totalCount, //total
  pageSize, // bir sayfadaki liste
  siblingCount = 1, // kardeş sayısı
  currentPage, // mevcut sayfa
}) {
  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize); //total page

    const totalPageNumbers = siblingCount + 2;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(
      currentPage + siblingCount,
      totalPageCount
    );

    const leftDots = leftSiblingIndex > 2;
    const rightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    // sol
    if (!leftDots && rightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, DOTS, totalPageCount];
    }

    //sağ
    if (leftDots && !rightDots) {
      let rightItemCount = 1 + 2 * siblingCount;
      let rightRange = range(
        totalPageCount - rightItemCount + 1,
        totalPageCount
      );
      return [firstPageIndex, DOTS, ...rightRange];
    }

    if (totalPageCount > 2) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      if (currentPage + 1 < lastPageIndex) {
        return [...middleRange, DOTS, lastPageIndex];
      } else {
        return [...middleRange, DOTS];
      }
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
}
