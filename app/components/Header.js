// components/Header.js
import React from 'react';
import { useAppContext } from './AppContext';  
import SearchBar from './SearchBar';

function Header({onSearch}) {
  // const { updateSearchTerm } = useAppContext();

  return (
    <header className="bg-gray-900 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="/GourmetHublogo.png" alt="GourmetHub Logo" className="h-10" />
          <h1 className="text-3xl font-bold">GourmetHub</h1>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
    </header>
  );
}

export default Header;
