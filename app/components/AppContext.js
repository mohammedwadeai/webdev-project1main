// components/AppContext.js
"use client";
import React, { createContext, useContext, useState } from 'react';

// Create a context with a default value
const AppContext = createContext({
  searchTerm: '',
  selectedRestaurant: null,
  updateSearchTerm: () => {},
  selectRestaurant: () => {},
  clearSelectedRestaurant: () => {}
});

// Context Provider component that holds the state and provides functions to update it
export const AppProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);

  // Function to update the search term
  const updateSearchTerm = (term) => {
    console.log("updatesearchterm")
    setSearchTerm(term);
  };

  // Function to set the currently selected restaurant
  const selectRestaurant = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };

  // Function to clear the currently selected restaurant
  const clearSelectedRestaurant = () => {
    setSelectedRestaurant(null);
  };

  // Value object that will be available to all children of this provider
  const value = {
    searchTerm,
    selectedRestaurant,
    updateSearchTerm,
    selectRestaurant,
    clearSelectedRestaurant
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the context
export const useAppContext = () => {
  return useContext(AppContext);
};

// This ensures that the context can be imported and used in components within its provider.
