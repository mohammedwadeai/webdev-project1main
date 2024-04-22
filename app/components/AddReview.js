"use client";
// components/AddReview.js
import React, { useState } from 'react';

function AddReview({ onAddReview }) {
    const [authorName, setAuthorName] = useState('');
    const [reviewText, setReviewText] = useState('');
    const [rating, setRating] = useState(1);
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        if (!authorName.trim() || !reviewText.trim()) {
            setErrorMessage('Please fill in all fields.');
            return;
        }

        setErrorMessage('');
        const newReview = {
            author_name: authorName,
            text: reviewText,
            rating: parseInt(rating, 10)
        };

        onAddReview(newReview);
        setAuthorName('');
        setReviewText('');
        setRating(1);
    };

    return (
        <div className="bg-white rounded-lg p-4 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                <div>
                    <label htmlFor="authorName" className="block text-sm font-medium text-gray-700">Name</label>
                    <input
                        type="text"
                        id="authorName"
                        value={authorName}
                        onChange={(e) => setAuthorName(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
                        placeholder="Your name"
                    />
                </div>
                <div>
                    <label htmlFor="reviewText" className="block text-sm font-medium text-gray-700">Review</label>
                    <textarea
                        id="reviewText"
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                        rows={3}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
                        placeholder="Your review"
                    />
                </div>
                <div>
                    <label htmlFor="rating" className="block text-sm font-medium text-gray-700">Rating</label>
                    <select
                        id="rating"
                        value={rating}
                        onChange={(e) => setRating(e.target.value)}
                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring focus:ring-blue-500 focus:ring-opacity-50 transition duration-300"
                    >
                        {[1, 2, 3, 4, 5].map(option => (
                            <option key={option} value={option}>{option} Stars</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="w-full px-4 py-2 bg-teal-500 text-white font-bold rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-opacity-50 transition duration-300">
                    Submit Review
                </button>
            </form>
        </div>
    );
}

export default AddReview;
