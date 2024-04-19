// components/Footer.js

function Footer() {
  return (
    <footer className="bg-gray-700 text-white py-4 px-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} GourmetHub. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
