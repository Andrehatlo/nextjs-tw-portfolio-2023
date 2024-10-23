import React from 'react';

interface SearchProps {
  onSearch: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
}

const Search: React.FC<SearchProps> = ({ onSearch }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <form onSubmit={onSearch} className="flex flex-col items-center">
        <input
          type="text"
          name="searchTerm"
          className="w-64 p-2 mt-4 text-center border border-gray-300 rounded-lg shadow-lg shadow-sky-700"
        />
        <button
          type="submit"
          className="w-64 p-2 mt-4 text-center text-white bg-blue-500 rounded-lg shadow-lg shadow-sky-700"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;
