// components/SearchBar.js

import React, { useState } from 'react';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    onSearch(term);  // This function will be passed from the parent component
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for restaurants..."
        value={searchTerm}
        onChange={handleInputChange}
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
      />
    </div>
  );
}

export default SearchBar;
