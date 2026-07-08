import { useState } from "react";
import { Link } from "react-router-dom";
import type { ProductProps } from "../types/type.ts";
import {
  ChevronLeft,
  ChevronRight,
  Minus,
  Plus,
  ShoppingCart,
  Sparkles,
  Trash2,
} from "lucide-react";
import { useCartStore } from "../store/useCartStore.ts";

const ProductCard = ({
  id,
  name,
  brand,
  imageUrls,
  price,
  rating,
  stock,
  category,
  isFeatured,
}: ProductProps) => {
  const {
    cart,
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeFromCart,
  } = useCartStore();

  const cartItem = cart.find((item) => item.id === id);
  const quantity = cartItem ? cartItem.quantity : 0;

  // Image slider active index state
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const images = Array.isArray(imageUrls) ? imageUrls : [imageUrls];

  const handleNextImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentImgIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Link
      to={`/product/${id}`}
      className="group block bg-slate-50/40 rounded-2xl overflow-hidden border border-gray-100 shadow-[0_4px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)] hover:bg-white transition-all duration-300 relative"
    >
      {/* Product Image Gallery Canvas */}
      <div className="relative aspect-square w-full overflow-hidden bg-white flex items-center justify-center border-b border-gray-100/60">
        <img
          src={images[currentImgIndex]}
          alt={name}
          className="w-full h-full object-contain p-5 transition-transform duration-500 group-hover:scale-102"
        />

        {/* Dynamic Badges Overlay */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          <span className="px-2.5 py-0.5 text-[9px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50/90 backdrop-blur-xs rounded-md border border-blue-100/50">
            {category}
          </span>
          {isFeatured && (
            <span className="px-2.5 py-0.5 flex items-center gap-1 text-[9px] font-bold uppercase tracking-wider text-white bg-gradient-to-r from-amber-500 to-orange-500 rounded-md shadow-xs">
              <Sparkles className="w-2.5 h-2.5 fill-white" /> Featured
            </span>
          )}
        </div>

        {/* Hover Gallery Navigation Controls */}
        {images.length > 1 && (
          <>
            <button
              onClick={handlePrevImage}
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/95 border border-gray-100 rounded-full shadow-md text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-gray-900 hover:text-white z-10"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={handleNextImage}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/95 border border-gray-100 rounded-full shadow-md text-gray-700 opacity-0 group-hover:opacity-100 transition-all duration-200 hover:bg-gray-900 hover:text-white z-10"
            >
              <ChevronRight size={16} />
            </button>

            {/* FIXED: Pagination Bullet Indicators now block link navigation */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setCurrentImgIndex(idx);
                  }}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    idx === currentImgIndex
                      ? "w-4 bg-gray-900"
                      : "w-1.5 bg-gray-300 hover:bg-gray-400"
                  }`}
                  aria-label={`Go to image ${idx + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {/* Product Information Details Wrapper */}
      <div className="p-5 flex flex-col justify-between min-h-[195px]">
        <div className="space-y-2">
          {/* Brand Row */}
          <div className="flex justify-between items-center">
            <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider">
              {brand}
            </span>
            <span
              className={`text-[10px] font-bold px-2 py-0.5 rounded-md tracking-wide uppercase ${
                stock > 0
                  ? "bg-emerald-50 text-emerald-700 border border-emerald-100"
                  : "bg-rose-50 text-rose-600 border border-rose-100"
              }`}
            >
              {stock > 0 ? "In Stock" : "Out of Stock"}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-sm font-semibold text-gray-800 line-clamp-1 leading-relaxed transition-colors duration-200">
            {name}
          </h3>
        </div>

        <div className="space-y-3.5 pt-3">
          {/* Price & Rating Layout */}
          <div className="flex items-baseline justify-between">
            <div className="flex items-baseline gap-1">
              <span className="text-xs font-bold text-gray-400">AED</span>
              <p className="text-xl font-black text-gray-900 tracking-tight">
                {price}
              </p>
            </div>
            {rating && (
              <div className="flex items-center gap-0.5 text-xs font-bold text-gray-800 bg-amber-400/10 border border-amber-400/20 px-2 py-0.5 rounded-md">
                <span className="text-amber-500 text-[11px]">★</span>
                <span>{rating}</span>
              </div>
            )}
          </div>

          {/* Elevated Modern Action Buttons */}
          {stock <= 0 ? (
            <button
              disabled
              className="w-full py-2.5 rounded-xl bg-gray-100 text-gray-400 text-xs font-semibold cursor-not-allowed border border-gray-200/50"
            >
              Out of Stock
            </button>
          ) : quantity === 0 ? (
            <button
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart(id);
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border-primary border text-black hover:text-white text-xs font-bold hover:bg-primary transition-all duration-200 shadow-md shadow-gray-900/10 hover:shadow-blue-600/10"
            >
              <ShoppingCart size={14} />
              Add to Cart
            </button>
          ) : (
            <div
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
              }}
              className="w-full flex items-center justify-between border border-primary bg-primary text-white rounded-xl overflow-hidden h-[38px] shadow-md shadow-primary animate-in fade-in duration-200"
            >
              <button
                onClick={() =>
                  quantity === 1 ? removeFromCart(id) : decrementQuantity(id)
                }
                className="flex items-center justify-center h-full px-4 text-white hover:bg-white/10 transition-colors"
              >
                {quantity === 1 ? (
                  <Trash2 size={14} className="text-red-200" />
                ) : (
                  <Minus size={14} />
                )}
              </button>
              <span className="font-bold text-xs tracking-wide select-none">
                {quantity} {quantity === 1 ? "item" : "items"} added
              </span>
              <button
                disabled={quantity >= stock}
                onClick={() => incrementQuantity(id)}
                className="flex items-center justify-center h-full px-4 text-white hover:bg-white/10 transition-colors disabled:opacity-30"
              >
                <Plus size={14} />
              </button>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
