// components/Footer.js
import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-white py-6 px-4">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center md:text-left">
        <div>
          <h6 className="font-bold text-lg">GourmetHub</h6>
          <p>Discover the best dining experiences.</p>
        </div>
        <div>
          <h6 className="font-bold text-lg">Follow Us</h6>
          <p>Connect with us on social media:</p>
          <div className="flex justify-center md:justify-start mt-2 space-x-2">
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Facebook</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Twitter</a>
            <a href="#" className="hover:text-gray-300 transition-colors duration-300">Instagram</a>
          </div>
        </div>
        <div>
          <h6 className="font-bold text-lg">Legal</h6>
          <a href="#" className="hover:text-gray-300 transition-colors duration-300">Privacy Policy</a>
          <br/>
          <a href="#" className="hover:text-gray-300 transition-colors duration-300">Terms of Service</a>
        </div>
      </div>
      <div className="text-center mt-4">
        <p>&copy; {year} GourmetHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
