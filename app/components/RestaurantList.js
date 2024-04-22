// components/RestaurantList.js
"use client";
import React, { useState } from 'react';
import RestaurantCard from './RestaurantCard';
import Modal from './Modal';
import Sort from './Sort';
import useRestaurantData from './useRestaurantData'; 

function RestaurantList({ searchTerm }) {
    const [selectedRestaurant, setSelectedRestaurant] = useState(null);
    const [selectedRestaurantDetails, setSelectedRestaurantDetails] = useState(null);
    const {
        filteredRestaurants,
        loading,
        error,
        nextPageToken,
        fetchRestaurants,
        updateSortCriteria
    } = useRestaurantData(searchTerm);

    const handleRestaurantClick = async (restaurant) => {
        setSelectedRestaurant(restaurant);
        try {
            // Make sure the endpoint matches your API route
            const response = await fetch(`/api/details?placeId=${restaurant.place_id}`);
            const data = await response.json();
            if (data.error) {
                console.error('Failed to fetch restaurant details:', data.error);
                throw new Error(data.error);
            } else {
                setSelectedRestaurantDetails(data.result); // Set the detailed data including reviews
            }
        } catch (error) {
            console.error('Network error when fetching restaurant details:', error);
        }
    };

    const handleCloseModal = () => {
        setSelectedRestaurant(null);
        setSelectedRestaurantDetails(null); // Clear the detailed data
    };

    const handleLoadMore = () => {
        if (nextPageToken) {
            fetchRestaurants(nextPageToken);
        }
    };

    return (
        <div className="container mx-auto p-4">
            <Sort onSortChange={updateSortCriteria} />
            {error && <p className="text-red-600 bg-red-100 rounded p-3 my-2">Error: {error}</p>}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-5">
                {filteredRestaurants.map(restaurant => (
                    <RestaurantCard
                        key={restaurant.place_id}
                        restaurant={restaurant}
                        onClick={() => handleRestaurantClick(restaurant)}
                    />
                ))}
                {filteredRestaurants.length === 0 && !loading && <p className="text-center">No restaurants found.</p>}
            </div>
            {loading && <div className="text-center"><div className="loader">Loading...</div></div>}
            {nextPageToken && !loading && (
                <button onClick={handleLoadMore} className="block mx-auto mt-4 py-2 px-6 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300">
                    Load More Restaurants
                </button>
            )}
            <Modal isOpen={!!selectedRestaurant} onClose={handleCloseModal} restaurant={selectedRestaurantDetails} />
        </div>
    );
}


export default RestaurantList;
