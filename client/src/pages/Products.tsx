import { useMemo, useEffect, useRef, useState } from "react";
import ProductGrid from "../components/ProductGrid.tsx";
import FilterSidebar from "../components/FilterSidebar.tsx";
import { useFilterStore } from "../store/useFilterStore";
import { useProducts } from "../hooks/useProducts.ts";

const Products = () => {
  // 1. Grab all required state properties from your Zustand store
  const sortBy = useFilterStore((state) => state.sortBy);
  const selectedCategories = useFilterStore(
    (state) => state.selectedCategories,
  );
  const maxPrice = useFilterStore((state) => state.maxPrice);
  const minRating = useFilterStore((state) => state.minRating);
  const includeOutOfStock = useFilterStore((state) => state.includeOutOfStock);
  const searchQuery = useFilterStore((state) => state.searchQuery);

  const [visibleCount, setVisibleCount] = useState(12);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // This is the reference hook that connects to the element at the bottom of the page
  const observerTargetRef = useRef<HTMLDivElement | null>(null);

  const loadMore = () => {
    setVisibleCount((prev) => prev + 12);
  };

  // Reset pagination whenever any filter rules change
  useEffect(() => {
    setVisibleCount(12);
  }, [sortBy, selectedCategories, maxPrice, minRating, includeOutOfStock]);

  const { data: products = [] } = useProducts();

  // 2. Filter and Sort the products completely based on store values
  const sortedProducts = useMemo(() => {
    let result = [...products];
    console.log({ result });

    // Category Filter
    if (selectedCategories.length > 0) {
      result = result.filter(
        (product) => {
          // Convert "smart-watches" to "smart watches"
          const productCat = product.category?.name
            .toLowerCase()
            .replace(/-/g, " ")
            .trim(); // Convert the product category to "smart watches" as well
          return selectedCategories.some((cat) => {
            const selected = cat.toLowerCase().replace(/-/g, " ").trim();
            return selected === productCat;
          });
        },
        // selectedCategories.some(
        //   (cat) => cat.toLowerCase() === product.category.toLowerCase(),
        // ),
      );
    }

    // SEARCH FILTER (FIXED)
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((p) => {
        // Added the explicit 'return' statement here!
        return (
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.brand.toLowerCase().includes(q)
        );
      });
    }

    // Price Filter
    result = result.filter((product) => product.price <= maxPrice);

    // Rating Filter
    result = result.filter(
      (product) =>
        product?.ratings !== undefined && product.ratings >= minRating,
    );

    // Out of Stock Filter
    if (!includeOutOfStock) {
      result = result.filter((product) => product.stock > 0);
    }

    // Sorting Logic
    if (sortBy === "price-low") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-high") result.sort((a, b) => b.price - a.price);
    if (sortBy === "ratings") {
      result.sort((a, b) => (b.ratings ?? 0) - (a.ratings ?? 0));
    }
    return result;
  }, [
    sortBy,
    selectedCategories,
    searchQuery,
    maxPrice,
    minRating,
    includeOutOfStock,
    products,
  ]);

  const productsToDisplay = useMemo(() => {
    return sortedProducts.slice(0, visibleCount);
  }, [sortedProducts, visibleCount]);

  // 3. Setup the corrected Intersection Observer hook
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

    return () => {
      if (currentTarget) observer.unobserve(currentTarget);
    };
  }, [visibleCount, sortedProducts.length]);

  return (
    <div className="flex flex-col md:flex-row gap-8 p-4 md:p-8 relative">
      {/* 2. Desktop Sidebar */}
      <aside className="hidden md:block w-64 border p-4 shrink-0 rounded-lg bg-white sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto no-scrollbar">
        <FilterSidebar />
      </aside>

      {/* 3. Mobile Filter Trigger Floating Button */}
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
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileFilterOpen(false)}
          />
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
        {sortedProducts.length > 0 ? (
          <>
            <ProductGrid products={productsToDisplay} />

            {/* Only render the observer element if there are actual products to scroll through */}
            <div
              ref={observerTargetRef}
              className="h-20 w-full flex items-center justify-center mt-6 text-gray-400 font-medium"
            >
              {visibleCount < sortedProducts.length
                ? "Loading more gadgets..."
                : "You've seen all products!"}
            </div>
          </>
        ) : (
          /* This replaces both your product grid and the footer message when the search is empty */
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <p className="text-lg font-semibold text-gray-700">
              No products match your filter criteria.
            </p>
            <p className="text-sm text-gray-400 mt-1">
              Try adjusting your keywords or clearing active filters.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Products;
