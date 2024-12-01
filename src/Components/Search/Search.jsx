

import React, { useContext } from "react";
import { FaSearch, FaTimes } from "react-icons/fa";
import { SearchContext } from "./SearchProvider";

const Search = () => {
  const { searchQuery, setSearchQuery } = useContext(SearchContext);
  
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCloseSearch = () => {
    setSearchQuery(""); // Clear search and close
  };

  return (
    <div className="w-full sm:w-auto relative">
      {searchQuery ? (
        <div className="relative w-96">
          <input
            type="text"
            value={searchQuery}
            onChange={handleInputChange}
            className="w-full flex-grow px-4 py-2 placeholder-gray-400 border"
            placeholder="Search products..."
          />
          <FaSearch
            className="absolute top-1/2 right-1 rounded-md transform -translate-y-1/2"
          />
          <button
            onClick={handleCloseSearch}
            className="absolute ml-16 top-1/2 transform -translate-y-1/2 text-other-gray focus:outline-none transition-transform duration-300 hover:rotate-90"
          >
            <FaTimes />
          </button>
        </div>
      ) : (
        <button
          onClick={() => setSearchQuery(" ")} // Activate search view
          className="px-3 py-2 rounded-md  focus:outline-none"
        >
          <FaSearch />
        </button>
      )}
    </div>
  );
};

export default Search;
