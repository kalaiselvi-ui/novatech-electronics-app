import { categories } from "../data/category.ts";
import type { FilterState } from "../types/type.ts";

interface FilterSidebarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  onClear: () => void;
}

const FilterSidebar = ({
  filters,
  setFilters,
  onClear,
}: FilterSidebarProps) => {
  const handleRatingChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(e.target.value);

    setFilters((prev) => ({
      ...prev,
      minRating: Number(e.target.value),
    }));
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters((prev) => ({
      ...prev,
      maxPrice: Number(e.target.value),
    }));
  };
  const handleCategoryChange = (slug: string) => {
    setFilters((prev) => {
      const isSelected = prev.selectedCategories.includes(slug);
      return {
        ...prev,
        selectedCategories: isSelected
          ? prev.selectedCategories.filter((c) => c !== slug)
          : [...prev.selectedCategories, slug],
      };
    });
  };

  return (
    <div
      className="filter-sidebar flex flex-col space-y-4"
      style={{
        border: "1px solid #eee",
        padding: "1.5rem",
        borderRadius: "8px",
      }}
    >
      <h3>Filters</h3>
      <button
        onClick={onClear}
        className="clear-btn bg-primary text-white rounded-md py-1 "
      >
        Clear Filters
      </button>

      <hr />

      {/* 2. Category Filter */}
      <div className="filter-section">
        <h4 className="mb-3">Category</h4>
        {categories.map((cat) => (
          <div key={cat.slug} className="mt-1">
            <label className="flex gap-2">
              <input
                type="checkbox"
                onChange={() => handleCategoryChange(cat.slug)}
                checked={filters.selectedCategories.includes(cat.slug)}
              />
              {cat.name}
            </label>
          </div>
        ))}
      </div>

      {/* 3. Price Range Filter */}
      <div className="filter-section">
        <h4>Price Range</h4>
        <input
          type="range"
          min="0"
          max="5000"
          style={{ width: "100%" }}
          value={filters.maxPrice}
          onChange={handlePriceChange}
        />
        <div>Max Price: ${filters.maxPrice}</div>{" "}
      </div>

      {/* 4. Rating Filter */}
      <div className="filter-section">
        <h4>Minimum Rating</h4>
        <select
          value={filters.minRating}
          onChange={handleRatingChange}
          style={{ width: "100%", padding: "0.5rem" }}
        >
          <option value="0">All Ratings</option>
          <option value="4">4 Stars & up</option>
          <option value="3">3 Stars & up</option>
        </select>
      </div>
    </div>
  );
};

export default FilterSidebar;
