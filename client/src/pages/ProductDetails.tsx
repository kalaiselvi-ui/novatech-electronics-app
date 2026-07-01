import { useState } from "react";
import { useParams } from "react-router-dom";
import { productList } from "../data/product";
import { ShoppingCart, StarIcon } from "lucide-react";

const ProductDetails = () => {
  const { id } = useParams();

  const product = productList.find((item) => String(item.id) === id);

  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);

  if (!product) {
    return (
      <div className="text-center py-20 text-gray-500">Product not found</div>
    );
  }

  const images = product.imageUrls || [];

  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* LEFT - IMAGES */}
        <div>
          {/* Main Image */}
          <div className="rounded-2xl overflow-hidden border bg-white">
            <img
              src={images[selectedImage]}
              alt={product.name}
              className="w-full h-[420px] object-cover"
            />
          </div>

          {/* Thumbnails */}
          <div className="flex gap-3 mt-4">
            {images.slice(0, 4).map((img, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`border rounded-lg overflow-hidden w-20 h-20 ${
                  selectedImage === index ? "ring-2 ring-secondary" : ""
                }`}
              >
                <img src={img} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT - DETAILS */}
        <div className="space-y-5">
          {/* Title */}
          <h1 className="text-3xl font-bold">{product.name}</h1>

          {/* Category + Brand */}
          <div className="flex gap-2 flex-wrap">
            <span className="text-xs px-3 py-1 bg-gray-100 rounded-full">
              Category: {product.category}
            </span>

            <span className="text-xs px-3 py-1 bg-secondary/20 text-secondary rounded-full">
              {product.brand}
            </span>
          </div>

          {/* Price */}
          <p className=" text-textSecondary text-xs">
            Price:{" "}
            <span className="text-secondary text-xl font-bold">
              ${product.price}
            </span>
          </p>

          {/* rating */}
          <div className="flex gap-1 items-center">
            <div className="flex items-center text-amber-500">
              {[...Array(5)].map((_, index) => {
                const starValue = index + 1;
                return (
                  <StarIcon
                    key={index}
                    size={18}
                    className={`${product.rating >= starValue ? "fill-amber-500 stroke-amber-500" : "text-gray-300 stroke-gray-300"}`}
                  />
                );
              })}
            </div>
            <span className="text-sm font-bold text-slate-700 ml-1">
              {product.rating}
            </span>
          </div>

          {/* Description */}
          <p className="text-textSecondary leading-relaxed">
            {product.description}
          </p>
          {/* Specifications Section */}
          {product.specs && Object.keys(product.specs).length > 0 && (
            <div className="mt-8 border-t border-slate-200 pt-6">
              <h3 className="text-lg font-bold text-slate-900 mb-4">
                Product Specifications
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 bg-slate-50 p-5 rounded-xl border border-slate-100">
                {Object.entries(product.specs).map(([key, value]) => (
                  <div
                    key={key}
                    className="flex justify-between items-center py-2 border-b border-slate-200/60 last:border-0 sm:last:border-b-[1px] lg:border-b"
                  >
                    <span className="text-sm font-medium text-slate-500">
                      {key}
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      {String(value)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Quantity */}
          <div className="flex items-center gap-4">
            <span className="text-sm font-medium">Quantity:</span>

            <div className="flex items-center border rounded-lg">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="px-3 py-1 text-lg"
              >
                -
              </button>

              <span className="px-4">{qty}</span>

              <button
                onClick={() => setQty((q) => q + 1)}
                className="px-3 py-1 text-lg"
              >
                +
              </button>
            </div>
          </div>

          {/* Add to Cart */}
          <button
            aria-label="shoppingCart-icon"
            className="flex gap-2 items-center rounded-xl border border-primary bg-primary px-7 py-3 font-semibold text-white transition-all duration-300 hover:border-secondary hover:shadow-[0_12px_30px_rgba(0,51,102,0.25)]"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>

          {/* Extra Info */}
          <div className="pt-5 border-t text-sm text-gray-500 space-y-1">
            <p>✔ Free delivery available</p>
            <p>✔ 7-day easy return</p>
            <p>✔ Secure payment</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
