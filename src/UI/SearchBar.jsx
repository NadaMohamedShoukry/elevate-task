import { SearchIcon } from "lucide-react";

function SearchBar({ query, setQuery }) {
  return (
    <div className=" relative flex items-center">
      <SearchIcon className="w-4.5 h-4.5 absolute left-4 " />
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a post..."
        className="w-full bg-white rounded-full h-12.75 pl-10 pr-4 py-4"
      />
    </div>
  );
}

export default SearchBar;
