import { categories } from "../data/category.ts";
import { useFilterStore } from "../store/useFilterStore.ts";

const FilterSidebar = () => {
  // Pull state and the setter function from Zustand
  const {
    selectedCategories,
    maxPrice,
    minRating,
    includeOutOfStock,
    setFilters,
    resetFilters,
  } = useFilterStore();

  // Toggles item inside selectedCategories array
  const handleCategoryChange = (slug: string) => {
    const lowerSlug = slug.toLowerCase();
    const isAlreadySelected = selectedCategories.includes(lowerSlug);

    setFilters({
      selectedCategories: isAlreadySelected
        ? selectedCategories.filter((c) => c !== lowerSlug)
        : [...selectedCategories, lowerSlug],
    });
  };

  return (
    <div className="filter-sidebar flex flex-col space-y-4 border p-6 rounded-lg">
      <h3>Filters</h3>
      <button
        onClick={resetFilters}
        className="bg-primary text-white rounded-md py-1"
      >
        Clear Filters
      </button>

      <hr />

      {/* 2. Category Filter */}
      <div className="filter-section">
        <h4 className="mb-3">Category</h4>
        {categories.map((cat) => (
          <div key={cat.slug} className="mt-1">
            <label className="flex gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat.slug.toLowerCase())}
                onChange={() => handleCategoryChange(cat.slug)}
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
          max="2000"
          style={{ width: "100%" }}
          value={maxPrice}
          onChange={(e) => setFilters({ maxPrice: Number(e.target.value) })}
        />
        <div>Max Price: ${maxPrice}</div>
      </div>

      {/* 4. Rating Filter */}
      <div className="filter-section">
        <h4>Minimum Rating</h4>
        <select
          style={{ width: "100%", padding: "0.5rem" }}
          value={minRating}
          onChange={(e) => setFilters({ minRating: Number(e.target.value) })}
        >
          <option value="0">All Ratings</option>
          <option value="4">4 Stars & up</option>
          <option value="3">3 Stars & up</option>
        </select>
      </div>

      {/* 5. Stock Availability */}
      <div className="filter-section">
        <h4>Availability</h4>
        <label className="flex gap-2 cursor-pointer">
          <input
            type="checkbox"
            checked={includeOutOfStock}
            onChange={(e) =>
              setFilters({ includeOutOfStock: e.target.checked })
            }
          />
          Include Out of Stock
        </label>
      </div>
    </div>
  );
};

export default FilterSidebar;
