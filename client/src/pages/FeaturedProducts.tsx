import { useState } from "react";
import { shuffleArray } from "../utils/shuffle.ts";
import { productList } from "../data/product.ts";
import ProductCard from "../components/ProductCard.tsx";

const FeaturedProducts = () => {
  const [shuffledProducts] = useState(() => shuffleArray(productList));
  const featuredProducts = shuffledProducts.filter(
    (product) => product.isFeatured,
  );

  return (
    <section className="max-w-7xl mx-auto md:px-8 px-4 py-10">
      <div className="relative text-center mb-10 space-y-2">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight bg-gradient-to-r from-gray-900 via-gray-800 to-gray-950 bg-clip-text text-transparent">
          Featured Products
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full opacity-80" />
      </div>{" "}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {featuredProducts.map((list) => (
          <div key={list.id}>
            <ProductCard
              id={list.id}
              name={list.name}
              imageUrls={list.imageUrls}
              brand={list.brand}
              category={list.category}
              rating={list.rating}
              stock={list.stock}
              price={list.price}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
