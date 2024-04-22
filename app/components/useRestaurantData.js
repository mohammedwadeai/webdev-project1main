// components/useRestaurantData.js
"use client";
import { useState, useEffect } from 'react';

const useRestaurantData = (searchTerm) => {
    const [restaurants, setRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurants] = useState([]);
    const [nextPageToken, setNextPageToken] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [sortCriteria, updateSortCriteria] = useState('');

    useEffect(() => {
        fetchRestaurants();
    }, []);

    useEffect(() => {
        filterAndSortRestaurants();
    }, [searchTerm, restaurants, sortCriteria]);

const fetchRestaurants = async (token = '') => {
    setLoading(true);
    setError(null);
    try {
        const url = `/api/locations${token ? `?pageToken=${token}` : ''}`;
        console.log("Fetching URL:", url); // Debugging line to check the URL
        const response = await fetch(url);
        const data = await response.json();
        console.log("Fetched Data:", data); // Debugging line to see the data
        if (data.status !== "OK") {
            throw new Error(`Google Places API Error: ${data.status}`);
        }
        setRestaurants(prev => [...prev, ...data.results]);
        setNextPageToken(data.next_page_token || '');
    } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
    }
    setLoading(false);
};

    const filterAndSortRestaurants = () => {
        let filtered = restaurants.filter(restaurant =>
            restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            restaurant.vicinity.toLowerCase().includes(searchTerm.toLowerCase())
        );
        filtered = sortRestaurants(filtered);
        setFilteredRestaurants(filtered);
    };

    const sortRestaurants = (restaurantsToSort) => {
        switch (sortCriteria) {
            case 'name-asc':
                return [...restaurantsToSort].sort((a, b) => a.name.localeCompare(b.name));
            case 'name-desc':
                return [...restaurantsToSort].sort((a, b) => b.name.localeCompare(a.name));
            case 'rating-asc':
                return [...restaurantsToSort].sort((a, b) => a.rating - b.rating);
            case 'rating-desc':
                return [...restaurantsToSort].sort((a, b) => b.rating - a.rating);
            default:
                return restaurantsToSort;
        }
    };

    return {
        filteredRestaurants,
        loading,
        error,
        nextPageToken,
        fetchRestaurants,
        updateSortCriteria
        };
};

export default useRestaurantData;
