// // pages/page.js 
// "use client";
// import React, { useState } from 'react';
// import Head from 'next/head';
// import Header from '../components/Header';
// import Footer from '../components/Footer';
// import RestaurantList from '../components/RestaurantList';

// function LandingPage() {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = (term) => {
//     setSearchTerm(term);
//   };

//   return (
//     <>
//       <Head>
//         <title>GourmetHub - Discover the Best Restaurants in Calgary</title>
//         <meta name="description" content="Explore top-rated restaurants around Calgary and discover new dining experiences." />
//       </Head>
//       <Header onSearch={handleSearch} />
//       <main className="py-8">
//         <div className="container mx-auto">
//           <h2 className="text-4xl font-bold text-center mb-8">Featured Restaurants in Calgary</h2>
//           <RestaurantList searchTerm={searchTerm} />
//         </div>
//       </main>
//       <Footer />
//     </>
//   );
// }

// export default LandingPage;
