// pages/index.js
import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import RestaurantList from './components/RestaurantList'; 

export default function Home() {
  return (
    <>
      <Head>
        <title>GourmetHub - Discover the Best Restaurants in Calgary</title>
        <meta name="description" content="Explore top-rated restaurants around Calgary and discover new dining experiences." />
      </Head>
      <Header />
      <main className="py-8">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-8">Featured Restaurants in Calgary</h2>
          <RestaurantList />
        </div>
      </main>
      <Footer />
    </>
  );
}
