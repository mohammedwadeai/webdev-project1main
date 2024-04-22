// components/Header.js
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from './SearchBar';

const headerVariants = {
  initial: { opacity: 0, y: -50 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  exit: { opacity: 0, y: -50, transition: { duration: 0.5 } }
};

function Header({ onSearch }) {
   const [isExpanded, setIsExpanded] = useState(false);
  return (
    <motion.header
      variants={headerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
      className="bg-fixed bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-4">
        <img src="/GourmetHublogo.png" alt="GourmetHub Logo" className="h-10 hover:scale-110 transition-transform duration-200"
               onMouseEnter={() => setIsExpanded(true)} onMouseLeave={() => setIsExpanded(false)} />
          <motion.h1
            whileHover={{ scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300 }}
            className="text-4xl font-bold">
            GourmetHub
          </motion.h1>
        </div>
        <SearchBar onSearch={onSearch} />
      </div>
    </motion.header>
  );
}

export default Header;