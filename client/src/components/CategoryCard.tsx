import { Link } from "react-router-dom";
import type { CategoryProps } from "../types/type.ts";

const CategoryCard = ({ image, slug, name }: CategoryProps) => {
  return (
    <Link
      to={`/category/${slug}`}
      className="flex flex-col items-center flex-shrink-0 group"
    >
      <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-200 shadow-sm transition-transform duration-300 group-hover:scale-110">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <p className="text-sm font-medium mt-3 text-textSecondary group-hover:text-secondary">
        {name}
      </p>
    </Link>
  );
};

export default CategoryCard;
