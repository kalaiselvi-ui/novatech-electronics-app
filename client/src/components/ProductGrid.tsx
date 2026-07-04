import React from "react";
import ProductCard from "./ProductCard";
import type { ProductProps } from "../types/type.ts";
import { useFilterStore } from "../store/useFilterStore.ts";

interface ProductGridProps {
  products: ProductProps[];
}

const ProductGrid = ({ products }: ProductGridProps) => {
  // Grab what we need for sorting directly from Zustand
  const sortBy = useFilterStore((state) => state.sortBy);
  const setFilters = useFilterStore((state) => state.setFilters);

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // You don't need setSortBy, just use partial update syntax!
    setFilters({ sortBy: e.target.value });
  };

  return (
    <div className="product-grid-container">
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-medium text-textSecondary hidden md:block">
          Showing {products.length}{" "}
          {products.length === 1 ? "product" : "products"}
        </span>

        <div className="flex items-center gap-2">
          <label
            htmlFor="sort"
            className="text-sm font-medium text-textSecondary"
          >
            Sort by:
          </label>
          <select
            id="sort"
            value={sortBy}
            onChange={handleSortChange}
            className="border border-gray-200 rounded-lg p-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-primary"
          >
            <option value="newest">Newest</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Rating</option>
          </select>
        </div>
      </div>

      {products.length === 0 ? (
        <div className="text-center py-12 text-gray-500 font-medium">
          No products match your filter criteria.
        </div>
      ) : (
        <div className="products-display-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              imageUrls={product.imageUrls}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
