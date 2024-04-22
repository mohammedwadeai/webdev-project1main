// components/SearchBar.js
"use client";

import React, { useState, useEffect } from 'react';
import { useAppContext } from './AppContext';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { updateSearchTerm } = useAppContext();


  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
        <form onSubmit={(e) => {
      e.preventDefault();
      console.log("onSubmit", searchTerm)
      onSearch(searchTerm)
      updateSearchTerm(searchTerm);
    }}>
      <input
        type="text"
        placeholder="Search restaurants..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="p-2 text-gray-700"
      />
      <button type="submit" className="p-2 bg-blue-500 text-white rounded">Search</button>
    </form>
  );
}

export default SearchBar;
