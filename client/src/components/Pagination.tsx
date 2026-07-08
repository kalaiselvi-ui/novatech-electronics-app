import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PaginationUIProps } from "../types/type.ts";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationUIProps) => {
  // Helper logic to generate truncated page arrays (e.g., [1, '...', 4, 5, 6, '...', 12])
  const getVisiblePages = () => {
    const visiblePages: (number | string)[] = [];
    const maxVisibleBeforeEllipsis = 2;

    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    // Always include first page
    visiblePages.push(1);

    if (currentPage > maxVisibleBeforeEllipsis + 1) {
      visiblePages.push("...");
    }

    // Calculate middle range bounds
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);

    for (let i = start; i <= end; i++) {
      visiblePages.push(i);
    }

    if (currentPage < totalPages - maxVisibleBeforeEllipsis) {
      visiblePages.push("...");
    }

    // Always include last page
    visiblePages.push(totalPages);
    return visiblePages;
  };

  const visiblePages = getVisiblePages();

  return (
    <div className="mt-6 flex items-center justify-center gap-1.5 sm:gap-2 w-full px-2">
      {/* Previous Button - Responsive padding and label */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 p-2 md:px-4 md:py-2 text-sm font-medium text-gray-600 transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
        title="Previous Page"
      >
        <ChevronLeft size={18} />
        <span className="hidden md:inline">Previous</span>
      </button>

      {/* Page Numbers */}
      <div className="flex items-center gap-1 sm:gap-1.5">
        {visiblePages.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="flex h-9 w-8 sm:h-10 sm:w-10 items-center justify-center text-gray-400 text-sm font-medium select-none"
              >
                ...
              </span>
            );
          }

          const isActive = currentPage === page;
          return (
            <button
              key={`page-${page}`}
              onClick={() => onPageChange(page as number)}
              className={`${
                isActive
                  ? "bg-primary text-white"
                  : "border border-gray-300 text-gray-700 bg-white transition hover:border-primary hover:text-primary"
              } h-9 w-9 sm:h-10 sm:w-10 text-xs sm:text-sm font-semibold rounded-lg shadow-sm flex items-center justify-center`}
            >
              {page}
            </button>
          );
        })}
      </div>

      {/* Next Button - Responsive padding and label */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="flex items-center justify-center gap-2 rounded-lg border border-gray-300 p-2 md:px-4 md:py-2 text-sm font-medium text-gray-600 transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
        title="Next Page"
      >
        <span className="hidden md:inline">Next</span>
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
