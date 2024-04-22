// components/Header.js
import React from 'react';
import { useAppContext } from './AppContext';  // Make sure the path is correct
import SearchBar from './SearchBar';

function Header() {
  const { updateSearchTerm } = useAppContext();

  return (
    <header className="bg-gray-900 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/GourmetHublogo.png" alt="GourmetHub Logo" className="h-10" />
          <h1 className="text-3xl font-bold">GourmetHub</h1>
        </div>
        <SearchBar onSearch={updateSearchTerm} />
      </div>
    </header>
  );
}

export default Header;
