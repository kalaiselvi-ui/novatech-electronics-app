import { useMemo } from "react";
import { shuffleArray } from "../utils/shuffle.ts";
import ProductCard from "../components/ProductCard.tsx";
import { useProducts } from "../hooks/useProducts.ts";

const FeaturedProducts = () => {
  const { data: products = [] } = useProducts();

  // 1. Filter the featured products first, then shuffle them
  const featuredProducts = useMemo(() => {
    if (!products.length) return [];

    const featured = products.filter((product) => product.isFeatured);
    return shuffleArray(featured);
  }, [products]); // Re-runs only when the 'products' array changes (e.g., when data loads)

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
          <div key={list._id}>
            <ProductCard
              id={list.id}
              _id={list._id}
              name={list.name}
              description={list.description || ""}
              images={list.images}
              brand={list.brand}
              category={list.category}
              ratings={list.ratings}
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
