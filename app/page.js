// page.js 
"use client";
import React, { useState } from 'react';
import LandingPage from './pages/page';

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
    <LandingPage />

    </>
  );
}

export default Home;
