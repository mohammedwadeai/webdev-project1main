"use client";

import React, { useState, useEffect } from "react";
import { useAppContext } from "./AppContext";
// import FirebaseLogin from './del_FirebaseLogin';

function AddReview({}) {
  const [review, setReview] = useState("");
  const [loggedin, setLoggedIn] = useState(false);


  const handleReviewChange = (e) => {
    setReview(e.target.value);
  };

  if (loggedin) {
    return (
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-full flex flex-col gap-2 mb-5"
      >
        <input
          type="text"
          placeholder="Type Review Here ..."
          value={review}
          onChange={handleReviewChange}
          className="p-2 text-gray-700 border rounded-5 "
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded">
          Add Review
        </button>
      </form>
    );
  } else {
    return (
      <button
        onClick={() => {
          setLoggedIn(true);
        }}
        className="p-3 mb-5 bg-blue-500 text-white rounded"
      >
        Login to add a Review
      </button>
    );
  }
}

export default AddReview;
