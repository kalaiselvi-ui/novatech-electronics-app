import { Link } from "react-router-dom";
import type { ProductProps } from "../types/type.ts";
import { Minus, Plus, ShoppingCart, Sparkles, Trash2 } from "lucide-react";
import { useState } from "react";

const ProductCard = ({
  id,
  name,
  brand,
  image,
  price,
  rating,
  stock,
  category,
  isFeatured,
}: ProductProps) => {
  const [quantity, setQuantity] = useState(0);
  return (
    <Link
      to={`/product/${id}`}
      className="group block bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300"
    >
      {/* Product Image */}
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {/* Floating Category Badge */}
        <div className="absolute top-3 left-3 flex items-center gap-1.5 flex-wrap">
          {/* Category Badge */}
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-gray-700 bg-white/80 backdrop-blur-md rounded-lg shadow-sm border border-white/40">
            {category}
          </span>

          {/* Featured Badge */}
          {isFeatured && (
            <span
              aria-label="sparkle-icon"
              className="px-2.5 py-1 flex gap-2 text-[10px] font-bold uppercase tracking-wider text-amber-700 bg-amber-50/90 backdrop-blur-md rounded-lg shadow-sm border border-amber-200/50"
            >
              <Sparkles className="w-3 h-3" /> Featured
            </span>
          )}
        </div>
      </div>
      {/* Product Details */}
      <div className="p-5 space-y-4 bg-slate-100">
        {/* Brand & Stock Status */}
        <div className="flex justify-between items-center text-xs">
          <span className="text-gray-400 font-semibold uppercase tracking-wider">
            {brand}
          </span>
          <span
            className={`font-semibold px-2 py-0.5 rounded-md text-[11px] ${
              stock > 0
                ? "bg-green-50 text-green-700"
                : "bg-red-50 text-red-600"
            }`}
          >
            {stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-base font-bold text-gray-800 line-clamp-2 min-h-[48px] group-hover:text-primary transition-colors duration-200">
          {name}
        </h3>

        {/* Rating & Price */}
        <div className="flex items-baseline justify-between">
          <p className="text-2xl font-extrabold text-gray-900">${price}</p>
          <div className="flex items-center gap-1 text-sm font-bold text-amber-500 bg-amber-50 px-2 py-0.5 rounded-md">
            <span>⭐</span>
            <span>{rating}</span>
          </div>
        </div>

        {/* Action Button */}

        {stock <= 0 ? (
          <button
            disabled
            className="w-full py-3 rounded-xl bg-gray-50 border border-gray-100 text-gray-400 text-sm font-semibold cursor-not-allowed"
          >
            Out of Stock
          </button>
        ) : quantity === 0 ? (
          /* State 1: Clean Outline Add to Cart Button */
          <button
            onClick={(e) => {
              e.preventDefault(); // Prevents clicking the button from navigating the product Link
              setQuantity(1);
            }}
            className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-gray-200 bg-transparent text-gray-700 text-sm font-semibold hover:bg-gray-900 hover:border-gray-900 hover:text-white transition-all duration-300 group-hover:border-gray-400"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        ) : (
          /* State 2: Premium Quantity Controller */
          <div
            onClick={(e) => e.preventDefault()} // Stops link navigation when hitting +/-
            className="w-full flex items-center justify-between border border-gray-900 bg-gray-900 text-white rounded-xl overflow-hidden h-[46px] shadow-sm animate-in fade-in zoom-in-95 duration-200"
          >
            {/* Minus / Delete Button */}
            <button
              onClick={() => {
                setQuantity((prev) => prev - 1);
              }}
              className="flex items-center justify-center h-full px-4 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200"
            >
              {quantity === 1 ? (
                <Trash2 size={16} className="text-red-400" />
              ) : (
                <Minus size={16} />
              )}
            </button>

            {/* Current Number Display */}
            <span className="font-bold text-sm select-none tracking-wide">
              {quantity} {quantity === 1 ? "item" : "items"} added
            </span>
            {/* {console.log(quantity)} */}

            {/* Plus Button */}
            <button
              disabled={quantity >= stock}
              onClick={() => setQuantity((prev) => prev + 1)}
              className="flex items-center justify-center h-full px-4 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <Plus size={16} />
            </button>
          </div>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;
