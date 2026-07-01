import { ChevronLeft, ChevronRight } from "lucide-react";
import type { PaginationUIProps } from "../types/type.ts";

const Pagination = ({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationUIProps) => {
  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="mt-10 flex items-center justify-center gap-2">
      {/* Previous */}
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="md:flex items-center gap-2 hidden rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-primary hover:text-primary disabled:cursor-not-allowed disabled:opacity-50"
      >
        <ChevronLeft size={18} />
        Previous
      </button>

      {/* Page Numbers */}
      {pages.map((page) => {
        const isActive = currentPage === page;
        return (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`${isActive ? "bg-primary text-white" : "border border-gray-300 text-gray-700 transition hover:border-primary hover:text-primary"} h-10 w-10 rounded-lg  font-semibold shadow-sm`}
          >
            {page}
          </button>
        );
      })}

      {/* Next */}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="md:flex hidden items-center gap-2 disabled:cursor-not-allowed rounded-lg border border-gray-300 px-4 py-2 text-sm font-medium text-gray-600 transition hover:border-primary hover:text-primary"
      >
        Next
        <ChevronRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
