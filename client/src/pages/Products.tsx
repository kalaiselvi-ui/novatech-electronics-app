import React, { useMemo, useEffect, useRef, useState } from "react";
import ProductGrid from "../components/ProductGrid.tsx";
import FilterSidebar from "../components/FilterSidebar.tsx";
import { productList } from "../data/product.ts";
import { useFilterStore } from "../store/useFilterStore";

const ProductPage = () => {
  const sortBy = useFilterStore((state) => state.sortBy);
  const visibleCount = useFilterStore((state) => state.visibleCount);
  const loadMore = useFilterStore((state) => state.loadMore);

  // 1. Local state to handle mobile drawer open/close
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const observerTargetRef = useRef<HTMLDivElement | null>(null);

  const sortedProducts = useMemo(() => {
    let result = [...productList];
    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    if (sortBy === "rating") result.sort((a, b) => b.rating - a.rating);
    return result;
  }, [sortBy]);

  const productsToDisplay = useMemo(() => {
    return sortedProducts.slice(0, visibleCount);
  }, [sortedProducts, visibleCount]);

  useEffect(() => {
    const currentTarget = observerTargetRef.current;
    if (!currentTarget) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < sortedProducts.length) {
          loadMore();
        }
      },
      { threshold: 0.1 },
    );

    observer.observe(currentTarget);
    return () => observer.unobserve(currentTarget);
  }, [visibleCount, sortedProducts.length, loadMore]);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 md:p-8 relative">
      {/* 2. Desktop Sidebar: Visible only on Medium screens and up */}
      <aside className="hidden md:block w-64 border p-4 shrink-0 rounded-lg bg-white h-fit sticky top-24">
        <FilterSidebar />
      </aside>

      {/* 3. Mobile Filter Trigger Floating Button: Hidden on desktop */}
      <div className="md:hidden flex justify-end mb-2">
        <button
          onClick={() => setIsMobileFilterOpen(true)}
          className="flex items-center gap-2 bg-primary text-white px-5 py-2.5 rounded-full shadow-lg font-medium tracking-wide active:scale-95 transition-transform"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-5 h-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 12h11.25"
            />
          </svg>
          Filters
        </button>
      </div>

      {/* 4. Mobile Filter Popup Modal/Drawer */}
      {isMobileFilterOpen && (
        <div className="fixed inset-0 z-50 flex md:hidden">
          {/* Backdrop blur effect */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileFilterOpen(false)}
          />
          {/* Slide out Panel */}
          <div className="relative ml-0 mr-auto w-full max-w-xs h-full bg-white p-6 shadow-2xl flex flex-col overflow-y-auto animate-slide-in">
            <div className="flex justify-between items-center mb-4">
              <span className="font-bold text-lg">Refine Results</span>
              <button
                onClick={() => setIsMobileFilterOpen(false)}
                className="p-1 rounded-md text-gray-500 hover:bg-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <FilterSidebar />
          </div>
        </div>
      )}

      {/* Main product list layout container */}
      <main className="flex-1">
        <ProductGrid products={productsToDisplay} />

        <div
          ref={observerTargetRef}
          className="h-20 w-full flex items-center justify-center mt-6 text-gray-400 font-medium"
        >
          {visibleCount < sortedProducts.length
            ? "Loading more gadgets..."
            : "You've seen all products!"}
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
