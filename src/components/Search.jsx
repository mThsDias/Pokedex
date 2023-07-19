// Search.js
import React from "react";

const Search = ({ pokemonFilter }) => {
  const handleSearch = (e) => {
    pokemonFilter(e.target.value);
  };

  return (
    <form>
      <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
        Search
      </label>
      <div className="relative m-8">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
        <input
          type="search"
          id="default-search"
          onChange={handleSearch}
          className="block w-full max-w-xs p-3 pl-10 text-sm rounded-xl"
          placeholder="Pesquisar ..."
        />
      </div>
    </form>
  );
};

export default Search;

