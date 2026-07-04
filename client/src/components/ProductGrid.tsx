import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard"; // Adjust path as needed
import type { FilterState, ProductProps } from "../types/type.ts";

interface ProductGridProps {
  products: ProductProps[];
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>; // We can type this strictly later
}

const ProductGrid = ({ products, filters, setFilters }: ProductGridProps) => {
  // Handle change in the sorting dropdown
  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilters((prev) => ({
      ...prev,
      sortBy: e.target.value,
    }));
  };

  return (
    <div className="product-grid-container">
      {/* Top Bar for Sorting & Results Count */}
      <div className="flex justify-between items-center mb-6">
        <span className="text-sm font-medium text-textSecondary">
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
            value={filters.sortBy}
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

      {/* Actual Product Grid */}
      {products.length === 0 ? (
        <div className="text-center py-12 text-gray-500 font-medium">
          No products match your filter criteria.
        </div>
      ) : (
        <div className="products-display-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              brand={product.brand}
              category={product.category}
              price={product.price}
              rating={product.rating}
              stock={product.stock}
              isFeatured={product.isFeatured}
              // Matching your exact Home Page logic:
              imageUrls={product.imageUrls}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductGrid;
