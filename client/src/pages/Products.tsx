import React, { useEffect, useMemo, useRef, useState } from "react";
import ProductGrid from "../components/ProductGrid.tsx";
// 1. Import your mock data list directly
import { productList } from "../data/product.ts";
import FilterSidebar from "../components/FilterSidebar.tsx";
import type { FilterState } from "../types/type.ts";

const ProductPage = () => {
  const defaultFilters: FilterState = {
    selectedCategories: [],
    maxPrice: 2000,
    minRating: 0,
    includeOutOfStock: true,
    searchQuery: "",
    sortBy: "price-high",
  };
  // 2. Set up our local tracking state object
  const [filters, setFilters] = useState(defaultFilters);
  const [visibleCount, setVisibleCount] = useState(12);
  const loadMoreRef = useRef<HTMLDivElement | null>(null);
  const processedProducts = useMemo(() => {
    let result = [...productList];

    // if (filters.sortBy === "newest") {
    //   result.sort(
    //     (a, b) =>
    //       new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    //   );
    // }
    result = result.filter((p) => p.price <= filters.maxPrice);

    result = result.filter((p) => {
      return p.rating >= filters.minRating;
    });

    if (filters.sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }
    if (filters.sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }
    if (filters.sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (filters.selectedCategories.length > 0) {
      result = result.filter((p) =>
        filters.selectedCategories.includes(p.category.toLowerCase()),
      );
    }
    return result;
  }, [filters]);

  const productsToDisplay = useMemo(() => {
    return processedProducts.slice(0, visibleCount);
  }, [processedProducts, visibleCount]);

  useEffect(() => {
    setVisibleCount(12);
  }, [filters]);

  // 2. Setup Intersection Observer to listen for scrolling
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // If the bottom element is visible, add more items
        if (
          entries[0].isIntersecting &&
          visibleCount < processedProducts.length
        ) {
          setVisibleCount((prev) => prev + 12);
        }
      },
      {
        threshold: 1.0, // Trigger immediately when the element is 100% visible
      },
    );
    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }
    return () => observer.disconnect();
  }, [visibleCount, processedProducts.length]);

  const handleClearFilters = () => {
    setFilters(defaultFilters);
  };

  return (
    <div className="flex gap-8 p-8">
      {/* Left side sidebar is empty for now! We will do it later. */}
      <aside className="w-64 border p-4">
        <FilterSidebar
          filters={filters}
          setFilters={setFilters}
          onClear={handleClearFilters}
        />
      </aside>

      {/* Right side Grid: We pass the data down directly */}
      <main className="flex-1">
        <ProductGrid
          products={productsToDisplay} // Giving it the raw array to print
          filters={filters}
          setFilters={setFilters}
        />
        {
          <div
            ref={loadMoreRef}
            className="h-10 w-full flex items-center justify-center mt-4 text-gray-400"
          >
            {visibleCount < processedProducts.length
              ? "Loading more items..."
              : "End of catalog"}
          </div>
        }
      </main>
    </div>
  );
};

export default ProductPage;
