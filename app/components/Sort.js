// components/Sort.js
"use client";

import React, { useState } from 'react';

function Sort({ onSortChange }) {
  const [activeSort, setActiveSort] = useState('');

  const handleSortChange = (sortType) => {
    onSortChange(sortType);
    setActiveSort(sortType);
  };

  const isActive = (type) => activeSort === type ? "bg-teal-600 text-white" : "bg-teal-500 text-gray-200";

  return (
    <div className="sort-container flex justify-center flex-wrap gap-2 p-2">
      <button 
        onClick={() => handleSortChange('name-asc')}
        className={`sort-button bg-teal-500 hover:bg-teal-600 focus:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out focus:outline-none transition duration-300 transform hover:-translate-y-1 hover:scale-105 focus:ring-2 focus:ring-teal-700 focus:ring-opacity-50 ${isActive('name-asc')}`}
        title="Sort by name, ascending"
      >
        Name (A-Z)
      </button>
      <button 
        onClick={() => handleSortChange('name-desc')}
        className={`sort-button bg-teal-500 hover:bg-teal-600 focus:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out focus:outline-none transition duration-300 transform hover:-translate-y-1 hover:scale-105 focus:ring-2 focus:ring-teal-700 focus:ring-opacity-50 ${isActive('name-desc')}`}
        title="Sort by name, descending"
      >
        Name (Z-A)
      </button>
      <button 
        onClick={() => handleSortChange('rating-asc')}
        className={`sort-button bg-teal-500 hover:bg-teal-600 focus:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out focus:outline-none transition duration-300 transform hover:-translate-y-1 hover:scale-105 focus:ring-2 focus:ring-teal-700 focus:ring-opacity-50 ${isActive('rating-asc')}`}
        title="Sort by rating, lowest first"
      >
        Rating (Lowest first)
      </button>
      <button 
        onClick={() => handleSortChange('rating-desc')}
        className={`sort-button bg-teal-500 hover:bg-teal-600 focus:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg transition duration-300 ease-in-out focus:outline-none transition duration-300 transform hover:-translate-y-1 hover:scale-105 focus:ring-2 focus:ring-teal-700 focus:ring-opacity-50 ${isActive('rating-desc')}`}
        title="Sort by rating, highest first"
      >
        Rating (Highest first)
      </button>
    </div>
  );
}

export default Sort;

