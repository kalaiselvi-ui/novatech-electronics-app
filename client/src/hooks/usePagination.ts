// hooks/usePagination.ts

import { useState } from "react";
import type { PaginationProps } from "../types/type.ts";

export const usePagination = <T>({
  data,
  itemsPerPage,
}: PaginationProps<T>) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate total pages dynamically based on data length
  const totalPages = Math.max(1, Math.ceil(data.length / itemsPerPage));

  // Ensure current page doesn't get out of bounds if data shrinks
  const sanitizedPage = Math.min(currentPage, totalPages);

  // Calculate slice indices
  const startIndex = (sanitizedPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // The subset of items to display on the current page
  const currentItems = data.slice(startIndex, endIndex);

  const nextPage = () => {
    if (sanitizedPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (sanitizedPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const goToPage = (page: number) => {
    const pageNumber = Math.max(1, Math.min(page, totalPages));
    setCurrentPage(pageNumber);
    window.scrollTo({ top: 1500, behavior: "smooth" });
  };

  return {
    currentPage: sanitizedPage,
    totalPages,
    currentItems,
    nextPage,
    prevPage,
    goToPage,
  };
};
