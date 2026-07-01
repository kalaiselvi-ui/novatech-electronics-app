import { useState } from "react";
import { shuffleArray } from "../utils/shuffle.ts";
import { productList } from "../data/product.ts";
import ProductCard from "../components/ProductCard.tsx";
import { usePagination } from "../hooks/usePagination.ts";
import Pagination from "../components/Pagination.tsx";

const Products = () => {
  const [shuffledProducts] = useState(() => shuffleArray(productList));
  const {
    currentItems: displayedProducts,
    currentPage,
    totalPages,
    goToPage,
  } = usePagination({ data: shuffledProducts, itemsPerPage: 20 });

  return (
    <section className="max-w-7xl mx-auto md:px-8 px-4 py-10">
      <div className="relative text-center mb-10 space-y-2">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-950 bg-clip-text text-transparent">
          All Products
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full opacity-80" />
      </div>{" "}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedProducts.map((list) => (
          <div key={list.id}>
            <ProductCard
              id={list.id}
              name={list.name}
              image={list.imageUrls[0]}
              brand={list.brand}
              category={list.category}
              rating={list.rating}
              stock={list.stock}
              price={list.price}
            />
          </div>
        ))}
      </div>
      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={goToPage}
        />
      )}
    </section>
  );
};

export default Products;
