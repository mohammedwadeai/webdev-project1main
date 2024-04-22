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
        <div>
            <Sort onSortChange={updateSortCriteria} />
            {error && <p className="text-red-500">Error: {error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {filteredRestaurants.map(restaurant => (
                    <RestaurantCard
                        key={restaurant.place_id}
                        restaurant={restaurant}
                        onClick={() => handleRestaurantClick(restaurant)}
                    />
                ))}
                {filteredRestaurants.length === 0 && !loading && <p>No restaurants found.</p>}
            </div>
            {loading && <p>Loading...</p>}
            {nextPageToken && !loading && (
                <button onClick={handleLoadMore} className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700">
                    Load More Restaurants
                </button>
            )}
            <Modal isOpen={!!selectedRestaurant} onClose={handleCloseModal} restaurant={selectedRestaurantDetails} />
        </div>
    );
}

export default RestaurantList;
