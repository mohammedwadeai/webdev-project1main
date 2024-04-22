// components/Modal.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AddReview from './AddReview';

function Modal({ isOpen, onClose, restaurant }) {
    

    // Use local state to handle newly added reviews along with existing ones
    const [localReviews, setLocalReviews] = useState(!restaurant?[]:[...(restaurant.reviews || [])]);
    
    // Function to add a new review to the state
    const handleAddReview = (newReview) => {
        setLocalReviews(prevReviews => [newReview, ...prevReviews]);
    };

    const { name = '', rating = 'No rating available', formatted_phone_number = '' } = restaurant || {};
    if (!isOpen || !restaurant) return null;
    return (
        <div className="fixed inset-0 z-30 overflow-y-auto" aria-labelledby="modal-headline" aria-modal="true">
            <div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                <div className="fixed inset-0 transition-opacity bg-gray-700 opacity-75" onClick={onClose}></div>
                <span className="hidden sm:inline-block sm:align-middle sm:h-screen">&#8203;</span>
                <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:align-middle sm:max-w-lg sm:w-full animate-scale-up">
                    <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                        <div className="sm:flex sm:items-start">
                            <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                    {name}
                                </h3>
                                <div className="mt-2">
                                    <p className="text-sm text-gray-500">{formatted_phone_number}</p>
                                    <p className="text-sm text-gray-500">Rating: {rating || 'No rating available'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                        <button type="button" className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-500 text-base font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 sm:ml-3 sm:w-auto sm:text-sm"
                                onClick={onClose}>
                            Close
                        </button>
                    </div>
                    <div className="px-4 py-3 sm:px-6">
                        <AddReview onAddReview={handleAddReview} />
                        {localReviews.length > 0 ? (
                            <div>
                                <h4 className="text-lg leading-6 font-medium text-gray-900">Reviews</h4>
                                <ul>
                                    {localReviews.map((review, index) => (
                                        <li key={index} className="mt-2">
                                            <p className="text-sm text-gray-600"><strong>{review.author_name}</strong>: {review.text}</p>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ) : <p className="text-sm text-gray-500">No reviews available.</p>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Modal;