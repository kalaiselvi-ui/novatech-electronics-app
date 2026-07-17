import { useNavigate } from "react-router-dom";
import { useFilterStore } from "../store/useFilterStore.ts";

// type SearchBarProps = {
//   autoFocus?: boolean;
//   onSearch?: (value: string) => void;
//   placeholder?: string;
// };

// const SearchBar = ({
//   autoFocus = false,
//   onSearch,
//   placeholder = "Search products...",
// }: SearchBarProps) => {
//   const navigate = useNavigate();
//   const setSearchQuery = useFilterStore((state) => state.setFilters);
//   const [searchTerm, setSearchTerm] = useState("");

// useEffect(() => {
//   const delayDebounceFn = setTimeout(() => {
//     const value = searchTerm.trim();
//     if (value) navigate("/products");
//     setSearchQuery({ searchQuery: value });
//   }, 300);
//   return () => clearTimeout(delayDebounceFn);
// }, [searchTerm, setSearchQuery]);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onSearch?.(searchTerm.trim());
//     }, 300);

//     return () => clearTimeout(timer);
//   }, [searchTerm, onSearch]);

//   return (
//     <div className="relative w-full">
//       <input
//         type="text"
//         autoFocus={autoFocus}
//         value={searchTerm}
//         onChange={(e) => setSearchTerm(e.target.value)}
//         placeholder={placeholder}
//         className="w-full px-4 py-2 md:pl-10 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary border-gray-300"
//       />
//     </div>
//   );
// };

// export default SearchBar;

import { useEffect, useState } from "react";

interface SearchBarProps {
  autoFocus?: boolean;
  placeholder?: string;
  initialValue?: string;
  onSearch: (value: string) => void;
}

const SearchBar = ({
  autoFocus = false,
  placeholder = "Search...",
  initialValue = "",
  onSearch,
}: SearchBarProps) => {
  const [searchTerm, setSearchTerm] = useState(initialValue);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(searchTerm.trim());
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm, onSearch]);

  return (
    <div className="relative w-full">
      <input
        type="text"
        autoFocus={autoFocus}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-2 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary border-gray-300"
      />
    </div>
  );
};

export default SearchBar;
