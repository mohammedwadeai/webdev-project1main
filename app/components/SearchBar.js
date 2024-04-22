// components/SearchBar.js
"use client";

import React, { useState } from 'react';
import { useAppContext } from './AppContext';

function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState('');
  const { updateSearchTerm } = useAppContext();

  // Function to handle changes in the search input
  const handleSearchChange = (e) => {
    // Update the search term directly without sanitizing
    setSearchTerm(e.target.value);
  };

  // Function to handle the submission of the form
  const handleSubmit = (e) => {
    e.preventDefault();
    // Sanitize input before submitting: trim and remove non-alphanumeric characters from the end
    const cleanedInput = searchTerm.replace(/[^\w\s](?=\s*$)|\s+$/, "").trim();
    if (cleanedInput) {
      console.log("onSubmit", cleanedInput);
      onSearch(cleanedInput); // Perform the search operation
      updateSearchTerm(cleanedInput); // Update context with the new search term
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
