// components/SearchBar.js
"use client";

import React, { useState } from 'react';
import { useAppContext } from './AppContext';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { updateSearchTerm } = useAppContext();

  // Function to handle changes in the search input
  const handleSearchChange = (e) => {
    // Sanitize input: remove non-alphanumeric characters and extra spaces
    const cleanedInput = e.target.value.replace(/[^a-zA-Z0-9 ]/g, "").trim();
    setSearchTerm(cleanedInput);
  };

  // Function to handle the submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      console.log("onSubmit", searchTerm);
      onSearch(searchTerm); // Perform the search operation
      updateSearchTerm(searchTerm); // Update context with the new search term
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
