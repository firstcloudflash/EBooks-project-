import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-3xl font-bold">
          <Link to="/">EbooksCentralHub</Link>
        </h1>
        <div>
          <Link to="/shop" className="mr-4">Shop</Link>
          <Link to="/blog" className="mr-4">Blog</Link>
          <Link to="/contact" className="mr-4">Contact</Link>
          <Link to="/coloring-pages" className="mr-4">Coloring Pages</Link>
          <Link to="/services" className="mr-4">Services</Link>
          <Link to="/wallpapers" className="mr-4">Wallpapers</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

