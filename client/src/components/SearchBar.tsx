type SearchBarProps = {
  autoFocus?: boolean;
};

const SearchBar = ({ autoFocus = false }: SearchBarProps) => {
  return (
    <div className="relative w-full">
      <input
        type="text"
        autoFocus={autoFocus}
        placeholder="Search products..."
        className="w-full px-4 py-2 md:pl-10 text-sm border rounded-lg focus:outline-none focus:ring-1 focus:ring-secondary border-gray-300"
      />
    </div>
  );
};

export default SearchBar;
