import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-md">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold">My React App</h1>
        <nav className="space-x-6">
          <Link to="/" className="hover:text-gray-200 transition">Home</Link>
          <Link to="/about" className="hover:text-gray-200 transition">About</Link>
          <Link to="/contact" className="hover:text-gray-200 transition">Contact</Link>
          <Link to="/faq" className="hover:text-gray-200 transition">FAQ</Link>
		   <Link to="/register" className="hover:text-gray-200 transition">Register</Link>
        </nav>
      </div>
    </header>
  );
}
