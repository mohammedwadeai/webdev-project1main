"use client";
import React, { useState, useEffect } from 'react';
import RestaurantCard from './RestaurantCard';

function RestaurantList() {
    const [restaurants, setRestaurants] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const location = "51.0447,-114.0719"; // Coordinates for Calgary
        const radius = 5000; // Search radius in meters
        const type = 'restaurant'; // Type of places to search for
        const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY; // API key stored in environment variables
        const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&key=${apiKey}`;

        const fetchRestaurants = async () => {
            try {
                const response = await fetch(url);
                const data = await response.json();
                if (data.status !== "OK") {
                    throw new Error(`Google Places API Error: ${data.status}`);
                }
                setRestaurants(data.results);
            } catch (error) {
                setError(error.message);
                console.error("Error fetching data:", error);
            }
        };

        fetchRestaurants();
    }, []);

    return (
        <div>
            <h2 className="mb-5 text-2xl font-bold text-gray-700">Featured Restaurants in Calgary</h2>
            {error && <p className="text-red-500">Error: {error}</p>}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {restaurants.length > 0 ? restaurants.map(restaurant => (
                    <RestaurantCard key={restaurant.place_id} restaurant={restaurant} />
                )) : (
                    !error && <p className="text-gray-600">No restaurants found.</p>
                )}
            </div>
        </div>
    );
}

export default RestaurantList;
