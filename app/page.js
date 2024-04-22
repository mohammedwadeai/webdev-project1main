// pages/page.js 
"use client";
import React, { useState } from 'react';
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantList from './components/RestaurantList';
import SearchBar from './components/SearchBar';

function LandingPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  return (
    <>
      <Head>
        <title>GourmetHub - Discover the Best Restaurants in Calgary</title>
        <meta name="description" content="Explore top-rated restaurants around Calgary and discover new dining experiences." />
      </Head>
      <Header onSearch={handleSearch} />
      <main className="py-8">
        <div className="container mx-auto">
          <section className="hero bg-cover bg-center py-20 mb-8" style={{ backgroundImage: 'url(/images/calgary-dining.jpg)' }}>
            <div className="text-center text-black">
              <h1 className="text-5xl font-bold mb-3">Welcome to GourmetHub</h1>
              <p className="text-xl mb-4">Discover and book the best restaurants in Calgary.</p>
              {/* <input 
                type="text" 
                placeholder="Search restaurants, cuisines, locations" 
                className="mt-1 block w-full max-w-md mx-auto p-4 rounded focus:ring-2 focus:ring-teal-500 transition duration-300"
                onChange={(e) => handleSearch(e.target.value)}
                value={searchTerm}
              /> */}
              <SearchBar onSearch={handleSearch} searchTerm={searchTerm}  />
            </div>
          </section>
          <h2 className="text-4xl font-bold text-center mb-8">Featured Restaurants</h2>
          <RestaurantList searchTerm={searchTerm} />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default LandingPage;
