import { ChevronLeft, ChevronRight } from "lucide-react";
import type { SliderArrowProps } from "../types/type.ts";

const SliderArrow = ({
  direction,
  scrollAmount = 320,
  containerRef,
}: SliderArrowProps) => {
  const handleScroll = () => {
    if (containerRef.current) {
      containerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };
  const positionClass =
    direction === "right"
      ? "absolute right-2 top-1/2 -translate-y-1/2 z-10"
      : "absolute left-5 top-1/2 -translate-y-1/2 z-10";
  return (
    <button
      aria-label={direction === "left" ? "Previous items" : "Next items"}
      onClick={handleScroll}
      className={`absolute ${positionClass} z-10 bg-white shadow-lg border border-slate-100 text-slate-700 hover:bg-slate-50 p-2.5 rounded-full transition-all hidden md:flex items-center justify-center`}
    >
      {direction === "left" ? <ChevronLeft /> : <ChevronRight />}
    </button>
  );
};

export default SliderArrow;
