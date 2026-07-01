import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FeaturedProduct = () => {
  const navigate = useNavigate();
  return (
    <div>
      <span className="inline-flex items-center rounded-full bg-secondary/10 px-3 py-1 text-sm font-medium text-secondary mb-3">
        Featured Collection
      </span>
      <div className="md:flex space-y-2 items-end justify-between mb-8">
        <div>
          <div className="relative">
            <h2 className=" text-2xl font-bold text-gray-900">
              Featured Products
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-primary to-secondary rounded-full opacity-80" />
          </div>

          <p className="mt-2 max-w-2xl text-gray-500">
            Explore our handpicked selection of trending products chosen just
            for you.
          </p>
        </div>

        <button
          onClick={() => navigate("/featured-products")}
          className="text-primary hover:underline font-medium flex gap-2"
          aria-label="rightArrow-icon"
        >
          View All <ArrowRight />
        </button>
      </div>
    </div>
  );
};

export default FeaturedProduct;
