  import { useNavigate } from "react-router-dom";
  import { useFilterStore } from "../store/useFilterStore.ts";
  import { useEffect, useState } from "react";

  type SearchBarProps = {
    autoFocus?: boolean;
  };

  const SearchBar = ({ autoFocus = false }: SearchBarProps) => {
    const navigate = useNavigate();
    const setSearchQuery = useFilterStore((state) => state.setFilters);
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
      const delayDebounceFn = setTimeout(() => {
        const value = searchTerm.trim();
        if (value) navigate("/products");
        setSearchQuery({ searchQuery: value });
      }, 300);
      return () => clearTimeout(delayDebounceFn);
    }, [searchTerm, setSearchQuery]);

    return (
      <div className="relative w-full">
        <input
          type="text"
          autoFocus={autoFocus}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search products..."
          className="w-full px-4 py-2 md:pl-10 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary border-gray-300"
        />
      </div>
    );
  };

  export default SearchBar;
